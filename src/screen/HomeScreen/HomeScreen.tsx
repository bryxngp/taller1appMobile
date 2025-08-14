import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, SafeAreaView, ImageBackground, StatusBar } from 'react-native'
import { styles } from '../../themes/appTheme';
import { CardProduct } from './components/CardProduct';
import { PRIMARY_COLOR } from '../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TitleComponent } from '../../components/TitleComponent';
import { ModalCart } from './components/ModalCart';

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
        { id: 1, name: 'Resident Evil 4', price: 60.0, stock: 6, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png' },
        { id: 2, name: 'God of War Ragnarok', price: 40.0, stock: 10, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2016/b69c06fb108299866057126b0d3a0530bdf96a39d2ce1cb9.png' },
        { id: 3, name: 'Silent Hill', price: 50.0, stock: 8, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/IgwsFz9BiBrFvyV7pIWpoVgd.png' },
        { id: 4, name: 'Mortal Kombat 1', price: 15.0, stock: 3, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/1cc63f4f4b2c9a9852fabefba4ca7eea936b1ef7867811a5.png' },
        { id: 5, name: 'Crash Bandicoot', price: 30.0, stock: 2, pathImage: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA07402_00/3/i_47c34c88118d43321fcfe620f2ca248c461abbaa972b9176ac22971e4202050a/i/icon0.png' },
        { id: 6, name: 'Db sparkin zero', price: 80.0, stock: 7, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202405/2306/e940c07107a4cefbbedbbd53451e26f0dbf292dcfab6c307.png' },
        { id: 7, name: 'Db kakarot', price: 25.0, stock: 5, pathImage: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA14835_00/3/i_ccd05c92612de5e47b057adf385a52d009477d50172352893034c19d2513943b/i/icon0.png' },
        { id: 8, name: 'Devil May Cry 5', price: 20.0, stock: 5, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3012/lPldVWxsnIfFOUBvBTKXndnw.png' },
        { id: 9, name: 'FC26', price: 60.0, stock: 9, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202409/2712/1e1c42b14d92280e17bda697b8c4ae13ff9f91bdb10fca89.png' },
        { id: 10, name: 'Watch Dogs', price: 45.0, stock: 11, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202007/0200/ohDfr1TcylLqbwva38ONyLHO.png' },
    ]

    const image = { uri: 'https://www.playstation.com/content/dam/global_pdc/en/campaigns-and-promotions/2024/2024-wrap-up/wallpapers/2024-WrapUp-Mobile-Wallpaper.jpg' };

    //hook useState para manejar el estado de los productos 
    const [listProducts, setListProducts] = useState<Product[]>(products) //arreglo de productos

    //hook useState para controlar los productos del carrito
    const [cart, setcart] = useState<Cart[]>([]);

    //hook useState para manejar el estado del modal
    const [showModal, setshowModal] = useState<boolean>(false);

    //Funcion para actualizar el stock 
    const upadteStock = (id: number, quantity: number) => {
        const updateProductos = listProducts.map(product => product.id == id
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actualizar stock
        setListProducts(updateProductos);
        //llamar la funcion para añadir al carrito
        addProduct(id, quantity);

    }

    //funcion para agregar los productos al carrito
    const addProduct = (id: number, quantity: number): void => {
        //filtrar el producto
        const product = listProducts.find(product => product.id == id);

        //validar si exite el producto
        if (!product) {
            return;
        }

        //crear producto para el carrito
        const newProductCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //añadir en el carrito
        setcart([...cart, newProductCart]);
        // console.log(cart);

    }

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} />

            <View style={localStyles.headerHome}>
                <TitleComponent title="Videojuegos" />
                <View style={localStyles.containerIcon}>
                    <Text style={localStyles.textIconCart}>{cart.length}</Text>
                    <Icon name='add-shopping-cart' 
                    size={27} 
                    color={'black'}
                    onPress={() => setshowModal(!showModal)}
                    />
                </View>
            </View>

            <ImageBackground source={image} resizeMode="cover" style={styles.imagen}>
                <FlatList
                    data={listProducts}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={upadteStock} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </ImageBackground>
            <ModalCart 
            visible={showModal} 
            setModalVisible={()=>setshowModal(!showModal)} 
            cart={cart}
            closeCart={setcart}
            />
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
        backgroundColor: 'red',
        color: 'white',
        paddingHorizontal: 5,
        borderRadius: 25,
        fontWeight: 'bold',
        fontSize: 13,

    },
})