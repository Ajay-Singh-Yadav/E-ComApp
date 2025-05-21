// src/components/ProductList.js

import React from 'react';
import {useSelector} from 'react-redux';
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ProductCard from './ProductCard';

const {width} = Dimensions.get('window');
const itemWidth = width / 2 - 20;

const ProductList = () => {
  const products = useSelector(state => state.products.filteredProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
      renderItem={({item}) => <ProductCard product={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: itemWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 13,
    color: 'gray',
  },
});

export default ProductList;
