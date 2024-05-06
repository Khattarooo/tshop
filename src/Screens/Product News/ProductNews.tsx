import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  View,
  ImageBackground,
  Text,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
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
import {api} from '../../utils/api';

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

  const refreshAccessToken = useCallback(async () => {
    if (refreshAttempted) {
      dispatch(resetAuthState());
      toast.show('Session terminated, Please log in again', {
        type: 'danger',
        animationType: 'zoom-in',
      });
      return null;
    }
    try {
      const response = await api.post('refresh-token', {
        refreshToken,
        token_expires_in: '0.5m',
      });
      const newAccessToken = response.data.accessToken;
      dispatch(setAccessToken(newAccessToken));
      setRefreshAttempted(true);
      return newAccessToken;
    } catch (error) {
      setRefreshAttempted(true);
      return null;
    }
  }, [refreshAttempted, dispatch, toast, refreshToken]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await api.get('posts', {
        params: {page, pageSize: 10},
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      const {pagination, results} = response.data;
      setPosts(prevPosts =>
        page === 1 ? results : [...prevPosts, ...results],
      );
      setHasNextPage(pagination.hasNextPage);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        await refreshAccessToken();
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [accessToken, refreshAccessToken, page]);

  useEffect(() => {
    if (accessToken && hasNextPage && !refreshing) {
      fetchPosts();
    }
  }, [accessToken, hasNextPage, refreshing, fetchPosts]);

  const handleNextPage = () => {
    if (hasNextPage && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
  };

  const renderPost = ({item, index}: {item: PostProps; index: number}) => (
    <View style={styles.postsContainer}>
      <PostCard
        key={`${item._id}_${index}`}
        image_url={item.image_url}
        title={item.title}
        keywords={item.keywords}
        _id={item._id}
      />
    </View>
  );

  const renderFooter = () => {
    if (!loading) {
      if (!hasNextPage) {
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
        keyExtractor={(item, index) => `${item._id}_${index}`}
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
