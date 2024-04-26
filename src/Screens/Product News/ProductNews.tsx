import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  ImageBackground,
  Text,
  RefreshControl,
} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {selectAccessToken} from '../../Redux/slices/authSlice';
import PostCard from '../../Components/Organisime/PostCard/PostCard';
import {PostProps} from '../../utils/types';
import styles from './ProductNewsStyles';

const ProductNews = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://backend-practice.euriskomobility.me/posts',
          {
            params: {
              page,
              pageSize: 10,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        console.log('Response from API:', response.data);
        const {pagination, results} = response.data;
        if (page === 1) {
          setPosts(results);
        } else {
          setPosts(prevPosts => [...prevPosts, ...results]);
        }
        setHasNextPage(pagination.hasNextPage);
        setRefreshing(false);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setRefreshing(false);
        setLoading(false);
      }
    };

    if (accessToken && hasNextPage) {
      fetchPosts();
    }
  }, [accessToken, page, hasNextPage]);

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
