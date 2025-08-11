import React, { useState } from 'react';
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navegacion/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'IniciarSesion'>;

// Interfaz para el formulario de registro
interface FormRegistro {
    nombre: string;
    apellido: string;
    correo: string;
    usuario: string;
    contraseña: string;
}

export const IniciarSesion = ({ navigation }: Props) => {

    const [formRegistro, setFormRegistro] = useState<FormRegistro>({
        nombre: '',
        apellido: '',
        correo: '',
        usuario: '',
        contraseña: '',
    });


    const changeForm = (property: keyof FormRegistro, value: string): void => {
        setFormRegistro({ ...formRegistro, [property]: value });
    };


    const handleRegister = (): void => {
        const { nombre, apellido, correo, usuario, contraseña } = formRegistro;

        if (
            nombre === '' || apellido === '' || correo === '' || usuario === '' || contraseña === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        console.log('Datos registrados:', formRegistro);
        Alert.alert('Registro exitoso', 'Usuario registrado correctamente');
    };

    const image = {
        uri: 'https://www.playstation.com/content/dam/global_pdc/en/campaigns-and-promotions/2024/2024-wrap-up/wallpapers/2024-WrapUp-Mobile-Wallpaper.jpg',
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <SafeAreaView style={styles.ventana}>
                        <Text style={styles.tituloPrincipal}>Registro:</Text>

                        <Text style={styles.titulo}>Nombre:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => changeForm('nombre', value)}
                            value={formRegistro.nombre}
                            placeholder="Ingresar Nombre"
                        />

                        <Text style={styles.titulo}>Apellido:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => changeForm('apellido', value)}
                            value={formRegistro.apellido}
                            placeholder="Ingresar Apellido"
                            keyboardType="ascii-capable"
                        />

                        <Text style={styles.titulo}>Correo Electrónico:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => changeForm('correo', value)}
                            value={formRegistro.correo}
                            placeholder="Ejm. ejemplo@gmail.com"
                            keyboardType="email-address"
                        />

                        <Text style={styles.titulo}>Usuario:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => changeForm('usuario', value)}
                            value={formRegistro.usuario}
                            placeholder="Usuario"
                            keyboardType="ascii-capable"
                        />

                        <Text style={styles.titulo}>Contraseña:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => changeForm('contraseña', value)}
                            value={formRegistro.contraseña}
                            placeholder="Ejm. 123456 / solo números"
                            keyboardType="numeric"
                        />

                        <TouchableOpacity style={styles.boton} onPress={handleRegister}>
                            <Text style={styles.botonTexto}>Registrarse</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('IniciarSesion')}>
                            <Text style={styles.registro}>Inicia Sesión !!!</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </ImageBackground>
            </SafeAreaView>

        </View>
    );
};