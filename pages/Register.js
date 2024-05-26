import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react'
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

function Register() {

    const navigation = useNavigation()

    const[username, setUsername] = useState()
    const[password, setPassword] = useState()

  const register = async () => {
    try {
      const resultregister = await fetch('http://localhost:3001/user/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password})
      });

      if (resultregister.ok) {
        const responseData = await resultregister.json();
        console.log('Car post successful:', responseData);
        navigation.navigate('Login')
      } else {
        console.log('Error posting car:');
      }
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Nome de usuário</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setUsername(e)}
        value={username}
        placeholder='Usuário:'
      />

      <Text style={styles.text}>senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setPassword(e)}
        value={password}
        placeholder='Senha'
      />

      <Button action={register} placeholder='Registrar'/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#616161',
    flex: 1,

  },
  input: {
    backgroundColor: '#fff',
    width: '50%',
    height: 40,
    margin: 10
  },
  text: {
    fontSize: 30,
    marginLeft: 10
  }


});

export default Register
