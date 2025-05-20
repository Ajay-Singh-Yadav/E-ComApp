import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/Slice/productSlice';

import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';

const ProductList = () => {
  const dispatch = useDispatch();
  const {items, loading, error} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorView message={error} />;

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{padding: 10}}
      renderItem={({item}) => <ProductCard product={item} />}
    />
  );
};

export default ProductList;
