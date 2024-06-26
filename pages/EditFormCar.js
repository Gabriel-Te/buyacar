import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react'
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

function EditFormCar() {

  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params

  const [name, setName] = useState(car.name)
  const [price, setPrice] = useState(car.price.toString())
  const [image, setImage] = useState(car.image)

  const edit = async () => {
    try {
      const resultEdit = await fetch(`http://localhost:3001/car/edit/${car.idcar}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          car: {
            idcar: car.idcar,
            name: name,
            price: price,
            image: image
          }
        })
      })

      if (resultEdit.ok) {
        const responseData = await resultEdit.json();
        console.log(`veículo ${car.idcar} editado com sucesso`, responseData);
        navigation.navigate('Home');
      } else {
        const errorData = await resultEdit.json();
        console.log('Error editing car:', resultEdit.status, resultEdit.statusText, errorData);
      }

    } catch (error) {
      console.log('Erro ao editar o veículo:', error);
    }
  };


  return (
    <View style={styles.container}>
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

      <Button action={edit} placeholder='Salvar'/>
    </View>
  )
};

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
    margin: 10
  },
  text: {
    color: '#CBF6FF',
    fontSize: 30,
    marginLeft: 10
  }


});
export default EditFormCar
