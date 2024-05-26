
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/Card'

function Home() {

  const [listCars, setListCars] = useState([])

  const getCars = async () => {
    try {
      const result = await fetch('http://localhost:3001/car/listAll', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });
      if (result.ok) {
        const data = await result.json()
        setListCars(data.cars)
      }

    } catch (error) {
      console.error('erro ao buscar os carros', error)
    }

  }

  useEffect(() => {
    getCars()
  }, []
  );

  return (
    <View style={styles.container}>
      {listCars.length ?
        <FlatList
          style={styles.flatlist}
          data={listCars}
          numColumns={2}
          renderItem={({ item }) =>
            <Card car={item} />
          }
          keyExtractor={(item) => item.idcar.toString()}
        /> : <Text>erro ao buscar os carros </Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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





