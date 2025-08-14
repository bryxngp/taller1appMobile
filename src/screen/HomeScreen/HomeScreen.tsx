import React from 'react'
import { FlatList, Text, View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import { styles } from '../../themes/appTheme';
import { CardProduct } from './components/CardProduct';

//interface para el arreglo de productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //arreglo con la listra de usuarios
    const products = [
        { id: 1, name: 'Resident Evil 4: Remake', price: 60.0, stock: 15, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png' },
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

    return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.imagen}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <CardProduct item={item} />}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </ImageBackground>
            </SafeAreaView>
    )
}
