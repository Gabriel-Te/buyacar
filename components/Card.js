import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


function Card({image,name,price}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={image}/>
      <Text style={styles.title}>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: 500
    },
    logo: {
      width: 200,
      height: 300
    }
  });
  
export default Card
