import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { SafeAreaView } from 'react-native-safe-area-context';
//import Icono from '../assets/icons/playstation.svg';


export const Registro = () => {

    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [correo, setCorreo] = React.useState('');
    const [usuario, setUsuario] = React.useState('');
    const [contraseña, setContraseña] = React.useState('');


    const image = { uri: 'https://www.playstation.com/content/dam/global_pdc/en/campaigns-and-promotions/2024/2024-wrap-up/wallpapers/2024-WrapUp-Mobile-Wallpaper.jpg' };

    return (

        <View style={styles.container}>

            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                    <SafeAreaView style={styles.ventana}>

                        {/* <Icono width={32} height={32}/> */}
                        <Text style={styles.tituloPrincipal}>Registro</Text>

                        <Text style={styles.titulo}>Nombre</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNombre}
                            value={nombre}
                            placeholder="Ingresar Nombre"
                        />
                        <Text style={styles.titulo}>Apellido</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setApellido}
                            value={apellido}
                            placeholder="Ingresar Apellido"
                            keyboardType="ascii-capable"
                        />
                        <Text style={styles.titulo}>Correo Electronico</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setCorreo}
                            value={correo}
                            placeholder="Ejm. ejemplo@gmail.com"
                            keyboardType="email-address"
                        />
                        <Text style={styles.titulo}>Usuario</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setUsuario}
                            value={usuario}
                            placeholder="Usuario"
                            keyboardType="ascii-capable"
                        />
                        <Text style={styles.titulo}>Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setContraseña}
                            value={contraseña}
                            placeholder="Ejm. 123456 / solo numeros"
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.boton}>
                            <Text style={styles.botonTexto}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </ImageBackground>
            </SafeAreaView>

        </View>
    )
}
