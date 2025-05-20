import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {category} from '../data/data';
import {useDispatch} from 'react-redux';
import {fetchProducts} from '../redux/Slice/productSlice';

export const CategoryList = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleSearch = (name, id) => {
    setSelectedCategory(id);
    dispatch(fetchProducts(name));
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleSearch(item.name, item.id)}
            style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
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
