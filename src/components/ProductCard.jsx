import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductCard = ({product}) => {
  const getShortTitle = (title, limit = 20) => {
    if (product.title.length > limit) {
      return product.title.slice(0, 20) + '...';
    }
    return product.title;
  };
  return (
    <View style={styles.card}>
      <Image
        source={{uri: product.image}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{getShortTitle(product.title)}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  image: {width: '100%', height: 150},
  title: {fontSize: 16, fontWeight: '600', marginTop: 10},
  price: {fontSize: 14, color: 'green', marginTop: 5},
});

export default ProductCard;
