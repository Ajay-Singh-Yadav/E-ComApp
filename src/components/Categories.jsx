import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../redux/Slice/productSlice';

export const CategoryList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.allProducts);
  const selectedCategory = useSelector(
    state => state.products.selectedCategory,
  );

  const uniqueCategories = ['All', ...new Set(products.map(p => p.category))];
  const categories = uniqueCategories.map((name, index) => ({
    id: index,
    name,
  }));
  const handleCategoryPress = name => {
    dispatch(setCategory(name));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({item}) => {
          const isSelected = item.id === selectedCategory;

          return (
            <TouchableOpacity
              onPress={() => handleCategoryPress(item.name)}
              style={[
                styles.categoryItem,
                isSelected && styles.selectedCategoryItem,
              ]}>
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.selectedCategoryText,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
});
