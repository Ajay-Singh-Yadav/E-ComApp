import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

import {increment, decrement} from '../redux/Slice/counterSlice';

const HomeScreen = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <View>
        <Text style={styles.text}>Count: {count}</Text>

        <Button title="Increment" onPress={() => dispatch(increment())} />

        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'TenorSans-Regular',
    fontSize: 30,
  },
});
