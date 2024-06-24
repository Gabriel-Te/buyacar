import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react'
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

function FormCar() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [image, setImage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const PostCar = async () => {
    try {
      const resultpost = await fetch('http://localhost:3001/car/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, price: price, image: image })
      });

      if (resultpost.ok) {
        const responseData = await resultpost.json();
        setSuccessMessage('Car post successful:', responseData)
        setErrorMessage('');
      } else {
        setErrorMessage(
          'Error posting car:', 
          resultpost.status,
          resultpost.statusText
        );
        setSuccessMessage('')
      }
    } catch (error) {
      setErrorMessage('Network Error 500')
      setSuccessMessage('')
    }

  }

  return (
    <View style={styles.container}>

      {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <Text style={styles.text}>Vehicle Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setName(e)}
        value={name}
        placeholder='Vehicle Name'
      />

      <Text style={styles.text}>Price</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setPrice(e)}
        value={price}
        placeholder='Price'
        keyboardType='numeric'
      />

      <Text style={styles.text}>Imagem(online URL)</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setImage(e)}
        value={image}
        placeholder='Set a Image'
      />

      <Button action={PostCar} placeholder='Criar'/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#3E6A87',
    flex: 1,

  },
  input: {
    backgroundColor: '#CBF6FF',
    width: '50%',
    height: 40,
    margin: 10,
    borderRadius: 3
  },
  text: {
    color: '#CBF6FF',
    fontSize: 30,
    marginLeft: 10
  },
  successMessage: {
    color: 'green',
    fontSize: 18,
    marginTop: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 18,
    marginTop: 10,
  },

});

export default FormCar
