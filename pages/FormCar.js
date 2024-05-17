import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {useState} from 'react'
import Button from '../components/Button';

function FormCar() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [image, setImage] = useState('')
  
  const PostCar = async() => {
    try {
      const resultpost = await fetch('http://localhost:3001/car/create',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json" 
        },
        body: JSON.stringify({name : name, price: price, image: image})
      });
      
      if (resultpost.ok) {
        const responseData = await resultpost.json();
        console.log('Car post successful:', responseData);
    } else {
        console.log('Error posting car:', resultpost.status, resultpost.statusText);
    }
    } catch (error) {
      console.log(error.message)
    }

  }
  
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

      <Text>Imagem(online URL)</Text>
      <TextInput
      style={styles.input}
      onChangeText={e => setImage(e)}
      value={image}
      placeholder='Set a Image'
      />

      <Button action={PostCar}/>
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
