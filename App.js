import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Home from './pages/Home'
import FormCar from './pages/FormCar';
import DrawerrContent from './components/DrawerContent';
import CardPressed from './pages/CardPressed';
import EditFormCar from './pages/EditFormCar';
import Login from './pages/Login';
import Register from './pages/Register';

const Drawer = createDrawerNavigator()



export default function App() {

  return (

    <SafeAreaView style={styles.maincontainer}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerrContent {...props} />}>
        {/*<Drawer.Screen name='Register' component={Register} />*/}
        {/* <Drawer.Screen name='Login' component={Login} /> */}
          <Drawer.Screen style={styles.home} name='Home' component={Home} />
          <Drawer.Screen name='FormCar' component={FormCar} />
          <Drawer.Screen name='CardPressed' component={CardPressed} />
          <Drawer.Screen name='EditFormCar' component={EditFormCar} />
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
  },
});
