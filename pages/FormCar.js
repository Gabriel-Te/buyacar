import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {useState} from 'react'

function FormCar() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  
  
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <TextInput
      style={styles.input}
      onChangeText={e => setName(e)}
      value={name}
      placeholder='Vehicle Name'
      />

      <TextInput
      style={styles.input}
      onChangeText={e => setPrice(e)}
      value={price}
      placeholder='Price'
      keyboardType='numeric'
      />
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundColor: '#616161',
        flex: 1
    },
    input: {
      backgroundColor: '#fff',
      width: '50%',
    }
    
  });
  
export default FormCar
