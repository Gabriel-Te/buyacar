
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/BuyAcar.png'


function Nav() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
      <Text style={styles.title}>Inicio</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal : 10
    },
    logo: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }
    
  });
  
export default Nav
