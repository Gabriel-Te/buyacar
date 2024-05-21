import {Text, TouchableOpacity, StyleSheet, View } from 'react-native'

function Button({action, placeholder}) {

    return(

        <TouchableOpacity onPress={action} style={styles.container}>
            <Text style={styles.title}>{placeholder}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingVertical: 10 ,
        paddingHorizontal: 30,
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