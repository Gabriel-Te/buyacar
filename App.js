import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Nav from './layout/Nav';
import Home from './pages/Home'
import FormCar from './pages/FormCar';

const Drawer = createDrawerNavigator()

export default function App() {

  return (

    <View style={styles.maincontainer}>

      <StatusBar style="auto" />

      <NavigationContainer>
         <Nav /> 
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='FormCar' component={FormCar} />
        </Drawer.Navigator>
      </NavigationContainer>

    </View>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6a6a6',
  },
});
