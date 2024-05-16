import {Text, TouchableOpacity, StyleSheet, View } from 'react-native'

function Button({action}) {

    return(

        <TouchableOpacity onPress={action} style={styles.container}>
            <Text style={styles.title}>titulo</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingVertical: 10 ,
        paddingHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        borderRadius: 5
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
        
    }
})

export default Button