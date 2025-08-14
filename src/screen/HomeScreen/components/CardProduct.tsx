import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';
import { Product } from '../HomeScreen';

//interface para las propiedades
interface Props {
    item: Product; //cada producto del arreglo 
    updateStock:(id : number, quantity: number)=> void;
}

export const CardProduct = ({ item, updateStock}: Props) => {
    //hook useState para manejar el estado de modal
    const [showModal, setModalVisible] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: item.pathImage }} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>Precio: ${item.price}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart' 
                    size={30} 
                    color={PRIMARY_COLOR}
                    onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>
            <ModalProduct item={item} visible={showModal} setModalVisible={()=>setModalVisible(!showModal)} updateStock = {updateStock} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        backgroundColor: SECONDARY_COLOR,
        elevation: 5,
        flex: 1,
        width: 160,
        
    },
    title: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    price: {
        fontSize: 15,
        marginLeft: 30,
    },
    image: {
        width: 90,
        height: 110,
        shadowColor: 'blue',
        borderRadius: 15,
        elevation: 10,
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    }
})