import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  ImageBackground,
  Text,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {
  resetAuthState,
  selectAccessToken,
  selectRefreshToken,
  setAccessToken,
} from '../../Redux/slices/authSlice';
import PostCard from '../../Components/Organisime/PostCard/PostCard';
import {PostProps} from '../../utils/types';
import styles from './ProductNewsStyles';
import {useToast} from 'react-native-toast-notifications';

const ProductNews = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const [refreshAttempted, setRefreshAttempted] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const refreshAccessToken = async () => {
    if (refreshAttempted) {
      dispatch(resetAuthState());
      toast.show('Session terminated, Please log in again', {
        type: 'danger',
        animationType: 'zoom-in',
      });
      return null;
    }
    console.log('Attempting to refresh access token with:', refreshToken);
    try {
      const response = await axios.post(
        'https://backend-practice.euriskomobility.me/refresh-token',
        {refreshToken, token_expires_in: '1m'},
      );
      const newAccessToken = response.data.accessToken;
      console.log('New access token received:', newAccessToken);
      dispatch(setAccessToken(newAccessToken));
      setRefreshAttempted(true);
      return newAccessToken;
    } catch (error) {
      console.error('Error refreshing access token:', error);
      setRefreshAttempted(true);
      return null;
    }
  };

  const fetchPosts = async () => {
    console.log('Using access token for fetching posts:', accessToken);
    try {
      const response = await axios.get(
        'https://backend-practice.euriskomobility.me/posts',
        {
          params: {page, pageSize: 10},
          headers: {Authorization: `Bearer ${accessToken}`},
        },
      );
      const {pagination, results} = response.data;
      setPosts(page === 1 ? results : [...posts, ...results]);
      setHasNextPage(pagination.hasNextPage);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        await refreshAccessToken();
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (accessToken && hasNextPage && !refreshing) {
      console.log('Token at useEffect:', accessToken);
      fetchPosts();
    }
  }, [accessToken, page, hasNextPage, refreshing]);

  const handleNextPage = () => {
    if (hasNextPage && !loading) {
      setPage(page + 1);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
  };

  const renderPost = ({item}: {item: PostProps}) => (
    <View style={styles.postsContainer}>
      <PostCard
        key={item._id}
        image_url={item.image_url}
        title={item.title}
        description={item.description}
        _id={item._id}
      />
    </View>
  );

  const renderFooter = () => {
    if (!loading) {
      if (posts.length === 0) {
        return (
          <View style={styles.centeredContainer}>
            <Text style={styles.noPost}>No more posts</Text>
          </View>
        );
      } else if (!hasNextPage) {
        return (
          <View style={styles.centeredContainer}>
            <Text style={styles.noPost}>No more posts to load</Text>
          </View>
        );
      }
    }
    return null;
  };

  return (
    <ImageBackground
      source={require('../../assets/w4.png')}
      style={styles.backgroundImage}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item, index) =>
          item._id ? item._id.toString() : index.toString()
        }
        ListFooterComponent={renderFooter}
        onEndReached={handleNextPage}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </ImageBackground>
  );
};

export default ProductNews;
