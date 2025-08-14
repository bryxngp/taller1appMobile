import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, SafeAreaView, ImageBackground, StatusBar } from 'react-native'
import { styles } from '../../themes/appTheme';
import { CardProduct } from './components/CardProduct';
import { PRIMARY_COLOR } from '../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TitleComponent } from '../../components/TitleComponent';

//interface para el arreglo de productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart {
    id: number,
    name: string,
    price: number,
    quantity: number,
    total: number,
}

export const HomeScreen = () => {
    //arreglo con la listra de usuarios
    const products = [
        { id: 1, name: 'Resident Evil 4: Remake', price: 60.0, stock: 1, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png' },
        { id: 2, name: 'God of War Ragnarok', price: 40.0, stock: 10, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2016/b69c06fb108299866057126b0d3a0530bdf96a39d2ce1cb9.png' },
        { id: 3, name: 'Silent Hill', price: 50.0, stock: 8, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/IgwsFz9BiBrFvyV7pIWpoVgd.png' },
        { id: 4, name: 'Mortal Kombat 1', price: 15.0, stock: 3, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/1cc63f4f4b2c9a9852fabefba4ca7eea936b1ef7867811a5.png' },
        { id: 5, name: 'Crash Bandicoot', price: 30.0, stock: 2, pathImage: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07402_00/3/i_47c34c88118d43321fcfe620f2ca248c461abbaa972b9176ac22971e4202050a/i/icon0.png' },
        { id: 6, name: 'Resident Evil 4: Remake', price: 60.0, stock: 15, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png' },
        { id: 7, name: 'God of War Ragnarok', price: 40.0, stock: 10, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2016/b69c06fb108299866057126b0d3a0530bdf96a39d2ce1cb9.png' },
        { id: 8, name: 'Silent Hill', price: 50.0, stock: 8, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/IgwsFz9BiBrFvyV7pIWpoVgd.png' },
        { id: 9, name: 'Mortal Kombat 1', price: 15.0, stock: 3, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/1cc63f4f4b2c9a9852fabefba4ca7eea936b1ef7867811a5.png' },
        { id: 10, name: 'Crash Bandicoot', price: 30.0, stock: 2, pathImage: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07402_00/3/i_47c34c88118d43321fcfe620f2ca248c461abbaa972b9176ac22971e4202050a/i/icon0.png' },
    ]

    const image = { uri: 'https://www.playstation.com/content/dam/global_pdc/en/campaigns-and-promotions/2024/2024-wrap-up/wallpapers/2024-WrapUp-Mobile-Wallpaper.jpg' };

    //hook useState para manejar el estado de los productos 
    const [listProducts, setListProducts] = useState<Product[]>(products) //arreglo de productos

    //hook useState para controlar los productos del carrito
    const [cart, setCart] = useState<Cart[]>([]);

    //Funcion para actualizar el stock 
    const upadteStock = (id: number, quantity: number) => {
        const updateProductos = listProducts.map(product => product.id == id
            ? { ...product, stock: product.stock - quantity } : product); //entonces ?
        //actualizar stock
        setListProducts(updateProductos);

        //funcion para anadir al carrito ROY

    }

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} />


            <View style={localStyles.headerHome}>
                <TitleComponent title="Videojuegos" />
                <View style={localStyles.containerIcon}>
                    <Text style={localStyles.textIconCart}>CARRITO</Text>
                    <Icon name='add-shopping-cart' size={27} color={'black'}
                    />
                </View>
            </View>

            <ImageBackground source={image} resizeMode="cover" style={styles.imagen}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={upadteStock} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </ImageBackground>
        </View>



    )
}

const localStyles = StyleSheet.create({
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 30,


    },

    textIconCart: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        borderRadius: 25,
        fontWeight: 'bold',
        fontSize: 13,

    },
})