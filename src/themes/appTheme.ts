import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../commons/constants";

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
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tituloPrincipal: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue'
    },
    imagen: {
        flex: 1,
        justifyContent: 'center'
    },
    boton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    botonTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    registro: {
        marginTop: 10,
        color: 'black',
        textAlign: 'center',
    },
    iconForm: {
        position: 'absolute',
        bottom: 15,
        right: 25,
    },


    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', //negro transparente
        justifyContent: 'center',
        alignItems: 'center',

    },

    modal: {
        padding: 20,
        margin: 15,
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
    },
    image1: {
        width: 90,
        height: 110,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        elevation: 7,
        shadowColor: 'red'
    },
    textModul: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    imageModul: {
        width: 150,
        height: 170,
        borderRadius: 10,
        alignSelf: 'center',
        elevation: 10,
        shadowColor: 'red'
    },
    iconClose: {
        marginBottom: 10,
        marginLeft: 150,
        fontSize: 25,
    },
    titleWelcome: {
        fontSize: 17,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',

    },
    description: {
        fontSize: 15,
        color: 'black',
        paddingVertical: 10,
    },
    containerForm: {
        marginVertical: 10
    },

    textRedirect: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'center',
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10

    },
    containerIcon: {

        flex: 1,
        alignItems: 'flex-end'
    },

    titleModal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    imageModal: {
        width: 150,
        height: 120,
        margin: 5,


    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 25,
    },

    buttonQuantityText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    textQuantity: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonAddCart: {
        backgroundColor: PRIMARY_COLOR,
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',

    },
    buttonAddCartText: {
        color: 'white',
        fontWeight: 'bold',

    },
    textAgotado: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 160,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        shadowColor: 'red',
        elevation: 10,
    },
})