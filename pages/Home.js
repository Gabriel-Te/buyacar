
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Card from '../components/Card'

function Home() {
    const itens = [
        {
          id : 1,
          name: 'Lotus Carlton',
          price: 140000,
          image: require('../assets/lotusCarlton.jpg')
        },
        {
          id : 2,
          name: 'Lotuas Carlton',
          price: 140000,
          image: require('../assets/lotusCarlton.jpg')
        },
        {
          id : 3,
          name: 'Lotus Carlton',
          price: 140000,
          image: require('../assets/lotusCarlton.jpg')
        },
        {
          id : 4,
          name: 'Lotus Carlton',
          price: 140000,
          image: require('../assets/lotusCarlton.jpg')
        },
      ]

  return (
    <View style={styles.container}>
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
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        paddingTop: 50,
        height: 100,
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
    },
    flatlist: {
        flex: 1,
        display: 'flex',
      }
    
  });
  
export default Home
