import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Nav from './layout/Nav';
import Home from './pages/Home'
import FormCar from './pages/FormCar';

const Drawer = createDrawerNavigator()

export default function App() {

  return (

    <SafeAreaView style={styles.maincontainer}>
    <StatusBar style="auto" />
      <NavigationContainer drawerStyle={styles.navigation}>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='FormCar' component={FormCar} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#cbf6ff',
  },
  navigation: {
    backgroundColor: 'black'
  }
});
