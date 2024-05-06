import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import ProductCard from '../../Components/Organisime/ProductCard/ProductCard';
import styles from './SearchStyles';
import {ProductProps} from '../../utils/types';
import {mockApi} from '../../utils/api';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Array<ProductProps>>([]);
  const [filteredProducts, setFilteredProducts] = useState<Array<ProductProps>>(
    [],
  );
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await mockApi.get('Product');
      const data = await response.data;
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProducts = useCallback(
    (query: string) => {
      if (query) {
        const matchedProducts = products.filter(product =>
          product.Name.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredProducts(matchedProducts);
      } else {
        setFilteredProducts(products);
      }
    },
    [products],
  );

  useEffect(() => {
    filterProducts(searchQuery);
  }, [searchQuery, filterProducts]);

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

  const renderEmptyListComponent = () => (
    <View style={styles.emptyListContainer}>
      <Text>No Product Found</Text>
    </View>
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    filterProducts(searchQuery);
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search for Products..."
        clearButtonMode="while-editing"
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(product, index) => `${product.id}-${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={renderEmptyListComponent}
      />
    </View>
  );
};

export default Search;
