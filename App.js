import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [product, setProduct] = useState('')
  const [data, setData] = useState([])

  const addProduct = () => {

    setData([...data, { key: product }])

    setProduct('')
  }

  const clearList = () => {

    setData([])
  }


  return (
    <View style={styles.container}>
      <TextInput 
          style={styles.input}
          onChangeText={product => setProduct(product)}
          value={product}          
      />
      <View style={styles.buttons}>
        <Button onPress={addProduct} title="add" />
        <Button onPress={clearList} title="clear" />
      </View>
      <Text style={styles.text}>Shopping list</Text>
      <FlatList
        data={data}
        renderItem={({item}) => 
          <Text>{item.key}</Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
      
  },
  text: {
    color: '#0000FF',
    fontWeight: 'bold'
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  }
});
