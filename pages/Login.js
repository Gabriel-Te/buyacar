import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react'
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

function Login() {

const navigation = useNavigation()

const[username, setUsername] = useState()
const[password, setPassword] = useState()

  const authenticator = async () => {
    try {
      const resultlogin = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
      });

      if (resultlogin.ok) {
        const responseData = await resultlogin.json();
        console.log('Car post successful:', responseData);
        navigation.navigate('Home')
      } else {
        console.log('Error posting car:');
      }
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <View style={styles.container}>

      <Text>Nome de usuário</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setUsername(e)}
        value={username}
        placeholder='Vehicle Name'
      />

      <Text>senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setPassword(e)}
        value={password}
        placeholder='Price'
      />

      <Button action={authenticator} placeholder='Logar'/>
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
  }

});

export default Login
