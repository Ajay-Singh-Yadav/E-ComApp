import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="blue" />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Loader;
