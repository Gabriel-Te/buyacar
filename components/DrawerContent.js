import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerContent = ({navigation}) => {
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FormCar')}>
          <Text style={styles.text}>Anuncie seu carro</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 80,
      paddingHorizontal: 20,
      backgroundColor: '#3E6A87',
    },
    item: {
      marginBottom: 20,
      backgroundColor: '#cbf6ff',
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 5
    },
    text: {
      fontSize: 18,
      color:'#000',
      fontWeight: '500',
      marginLeft: 10
    },
  });
  
  export default DrawerContent;