import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Nav from './layout/Nav';
import Card from './components/Card';

export default function App() {

  const itens = [
    {
      id : 1,
      name: 'Lotus Carlton',
      price: 140000,
      image: require('./assets/lotusCarlton.jpg')
    },
    {
      id : 2,
      name: 'Lotuas Carlton',
      price: 140000,
      image: require('./assets/lotusCarlton.jpg')
    },
    {
      id : 3,
      name: 'Lotus Carlton',
      price: 140000,
      image: require('./assets/lotusCarlton.jpg')
    },
    {
      id : 4,
      name: 'Lotus Carlton',
      price: 140000,
      image: require('./assets/lotusCarlton.jpg')
    },
  ]

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Nav/>
      <Text>FlatList</Text>
      <FlatList
      style={styles.flatlist}
      data={itens}
      numColumns={2}
      renderItem={({item}) => 
        <Card image={item.image} name={item.name} price={item.price}/>
      }
      keyExtractor={(item) => item.id.toString()}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6a6a6',
  },
  flatlist: {
    flex: 1
  }
});
