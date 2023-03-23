import React, { useEffect, useMemo, useState } from 'react';
import { View, FlatList, ListRenderItem, SafeAreaView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import api from 'config/api';
import { ApiResponse } from 'apisauce';
import { act } from 'react-test-renderer';
import ProductCard from 'components/ProductCard';
import Header from 'components/Header';
import { Product } from 'interfaces/product';
import { ListKeyExtractor } from 'interfaces/global';

import './i18n';
import styles from './styles';

function Home() {
  const [query, setQuery] = useState('');
  const [requestErrror, setRequestError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [t] = useTranslation('HOME');

  useEffect(() => {
    const fetchProducts = async () => {
      setRequestError(false);
      const response: ApiResponse<Product[]> = await api.get('/products');
      if (response.ok) {
        act(() => {
          setProducts(response.data || []);
        });
      } else {
        setRequestError(true);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo<Product[]>(
    () => products.filter(({ title }) => title.toLowerCase().includes(query?.toLowerCase())),
    [products, query]
  );

  const renderItem: ListRenderItem<Product> = ({ item }) => <ProductCard {...item} />;

  const keyExtractor: ListKeyExtractor<Product> = ({ id }) => String(id);

  if (requestErrror) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.info}>{t('REQUEST_ERROR')}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header query={query} onSearch={(text: string | null) => setQuery(text ?? '')} />
      <View style={styles.subContainer}>
        <FlatList
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          data={query ? filteredProducts : products}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
