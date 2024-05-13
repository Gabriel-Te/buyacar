
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Card from '../components/Card'

function Home() {
    const itens = [
        {
          id : 1,
          name: 'Lotus Carlton',
          price: 140000,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Porsche_964_front_20080515.jpg/1200px-Porsche_964_front_20080515.jpg'
        },
        {
          id : 2,
          name: 'Lotuas Carlton',
          price: 140000,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxH8JzdrjS_NLhjkZHNZRrbKdgaIZLRzsH-g&usqp=CAU'
        },
        {
          id : 3,
          name: 'Lotus Carlton',
          price: 140000,
          image: 'https://carroscomcamanzi.com.br/wp-content/uploads/2022/02/JAGUAR-XJ-C-3.jpg'
        },
        {
          id : 4,
          name: 'Lotus Carlton',
          price: 140000,
          image: 'https://www.carscoops.com/wp-content/uploads/2020/08/Mercedes-Benz-190E-2.5-16-Evolution-7b.jpg'
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
        backgroundColor: 'lightgrey',
        flex: 1,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        width: '100%',
        maxWidth: '100%'
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
