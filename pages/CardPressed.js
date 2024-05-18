import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useState} from 'react'
import Button from '../components/Button';

function CardPressed() {

    const route = useRoute()
    const {item} = route.params


  return (
    <View style={styles.container}>
        <Image style={styles.image} source={item.image}/>
        <Text>{item.price}</Text>
        <Text>{item.name}</Text>
    </View>
  )}
  
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
