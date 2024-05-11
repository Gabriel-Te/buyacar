import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {useState} from 'react'
import Button from '../components/Button';

function FormCar() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [image, setImage] = useState('')
  
  
  return (
    <View style={styles.container}>

      <Text>Vehicle Name</Text>
      <TextInput
      style={styles.input}
      onChangeText={e => setName(e)}
      value={name}
      placeholder='Vehicle Name'
      />

      <Text>Price</Text>
      <TextInput
      style={styles.input}
      onChangeText={e => setPrice(e)}
      value={price}
      placeholder='Price'
      keyboardType='numeric'
      />

      <Text>Image(online URL)</Text>
      <TextInput
      style={styles.input}
      onChangeText={e => setImage(e)}
      value={image}
      placeholder='Set a Image'
      />

      <Button/>
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#616161',
        flex: 1,

    },
    input: {
      backgroundColor: '#fff',
      width: '50%',
    }
    
  });
  
export default FormCar
