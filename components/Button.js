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
        backgroundColor: '#fff',
        paddingVertical: 10 ,
        paddingHorizontal: 30,
        alignContent: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 5,
        margin: 10
    },
    title: {
        color: '#3E6A87',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
        
    }
})

export default Button