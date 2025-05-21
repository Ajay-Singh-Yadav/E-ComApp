import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {setSearchQuery} from '../redux/Slice/productSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajio</Text>

      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          style={styles.input}
          onChangeText={text => dispatch(setSearchQuery(text))}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});
