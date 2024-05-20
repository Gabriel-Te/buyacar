import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react'
import Button from '../components/Button';

function CardPressed() {

  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params

  const remove = async () => {
    try {
      const resultRemove = await fetch(`http://localhost:3001/car/remove/${car.idcar}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(`veículo ${car.idcar} removido com sucesso`, car);
      navigation.navigate('Home')
    } catch (error) {
      console.log('erro ao remover o veículo', error)
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={car.image} />
      <Text>{car.price}</Text>
      <Text>{car.name}</Text>

      <Button action={remove}></Button>
      <Button action={() => navigation.navigate('EditFormCar', { car })}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#616161',
    flex: 1
  },
  image: {
    width: 200,
    height: 100,
    objectFit: 'cover'
  }

});

export default CardPressed
