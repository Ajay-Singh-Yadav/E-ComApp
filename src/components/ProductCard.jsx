import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const itemWidth = width / 2 - 20;

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

export default ProductCard;
