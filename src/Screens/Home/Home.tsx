import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, RefreshControl, FlatList, Animated, Text} from 'react-native';
import ProductCard from '../../Components/Organisime/ProductCard/ProductCard';
import styles from './HomeStyles';
import {ProductProps} from '../../utils/types';

const Home = () => {
  const [products, setProducts] = useState<Array<ProductProps>>([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const limitPerPage = 4;
  const moveAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }),
    ).start();
  }, [moveAnimation]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        `https://6628b3a154afcabd07369c31.mockapi.io/Product?page=${page}&limit=${limitPerPage}`,
      );
      const data = await response.json();
      if (data.length === 0) {
        setHasMorePosts(false);
      }
      if (page === 1) {
        setProducts(data);
      } else {
        setProducts(prevProducts => [...prevProducts, ...data]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, page]);

  const loadMoreProduct = () => {
    if (hasMorePosts) {
      setPage(page + 1);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setHasMorePosts(true);
    fetchProducts().then(() => {
      setRefreshing(false);
    });
  };

  const translateX = moveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-310, 310],
  });

  const renderProductItem = ({
    item,
    index,
  }: {
    item: ProductProps;
    index: number;
  }) => (
    <View style={styles.productContainer}>
      <ProductCard
        key={`${item.id}-${index}`}
        Name={item.Name}
        price={item.price}
        isAvailable={item.isAvailable}
        id={item.id}
        image={item.image}
        unit={item.unit}
        currency={item.currency}
      />
    </View>
  );

  const renderFooter = () => {
    if (!hasMorePosts) {
      return (
        <View style={styles.centeredContainer}>
          <Text style={styles.noPost}>No more product to load</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.background}>
      <View style={styles.banner}>
        <Animated.Text
          style={[
            styles.bannerText,
            {
              transform: [{translateX}],
            },
          ]}>
          Long Press On The Item To See The Price In LBP
        </Animated.Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(product, index) => `${product.id}-${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={renderFooter}
        onEndReached={loadMoreProduct}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Home;
