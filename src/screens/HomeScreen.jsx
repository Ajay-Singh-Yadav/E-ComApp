import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import CategoryFilter, {CategoryList} from '../components/Categories';

const HomeScreen = () => {
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
