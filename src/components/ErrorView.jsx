import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ErrorView = ({message}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Error: {message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'red', fontSize: 16},
});

export default ErrorView;
