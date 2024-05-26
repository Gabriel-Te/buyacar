import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({car}) => {

  const navigation = useNavigation()

  return (
  <Pressable onPress={() => navigation.navigate('CardPressed', {car})}>
    <View style={styles.container}>
      <Image style={styles.logo} source={car.image}/>
      <Text style={styles.title}>{car.name}</Text>
      <Text style={styles.price}>R${car.price}</Text>
    </View>
  </Pressable>
  );
}
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#3E6A87',
      marginHorizontal: 3,
      marginVertical: 6,
      width: 200,
      height: 180,
    },
    logo: {
      width: 200,
      height: 100,
      objectFit: 'cover'
    },
    title: {
      marginTop: 5,
      marginLeft: 4,
      fontWeight: '600',
      color: '#FFF'
    },
    price: {
      marginTop: 15,
      marginLeft: 5,
      fontWeight: '800',
      color: '#CBF6FF'
    }
  });
  
export default Card
