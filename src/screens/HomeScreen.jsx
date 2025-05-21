import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import SearchBar from '../components/SearchBar';
import {useDispatch} from 'react-redux';
import ProductList from '../components/ProductList';
import CategoryFilter, {CategoryList} from '../components/Categories';
import {products} from '../data/products';
import {setProducts} from '../redux/Slice/productSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SearchBar />
      <CategoryList />
      <ProductList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  text: {
    fontSize: 30,
  },
});
