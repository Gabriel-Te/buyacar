
import { StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/Card'

function Home() {

  const [listCars, setListCars] = useState([])

  const getCars = async() =>{
    try{
    const result = await fetch('http://localhost:3001/car/listAll',{
    method: 'GET',
    headers: {
      "Content-Type" : "application/json" 
    },
    });
    if(result.ok){
      const data = await result.json()
      setListCars(data.cars)
    }
  }catch(error){
    console.error('erro ao buscar os carros',error)
  }

  }

  useEffect(() =>{
    getCars()
  }, []
  );

  return (
    <View style={styles.container}>
      <FlatList
      style={styles.flatlist}
      data={listCars}
      numColumns={2}
      renderItem={({item}) => 
        <Card image={item.image} name={item.name} price={item.price}/>
      }
      keyExtractor={(item) => item.idcar.toString()}
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
