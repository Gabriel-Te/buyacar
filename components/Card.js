import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


function Card({image,name,price}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri:image}}/>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
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
      fontWeight: '800',
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
