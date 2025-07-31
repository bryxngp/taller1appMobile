import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: 'blue'
    },
    ventana: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
    },

image: {
    flex: 1,
    justifyContent: 'center'
},
icono: {
    flex: 1,
    justifyContent: 'center'
},

})