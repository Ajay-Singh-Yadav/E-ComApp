import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {category} from '../data/data';

const Categories = () => {
  return (
    <View>
      <FlatList
        data={category}
        horizontal
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <View style={styles.category}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  category: {
    marginHorizontal: 10,
  },
});
