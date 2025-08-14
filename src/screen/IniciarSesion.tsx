import React, { useState } from 'react'
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../themes/appTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { ImputComponent } from '../components/Imputcomponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';

//interface para las propiedades
interface Props {
    users: User[]; //arreglos con la lista de usuarios
}

//interfacepara el objeto del formulario
interface FormLogin {
    username: string,
    password: string
}

//definir una interfas para los objetos de mi arreglo users
interface User {
    id: number,
    name: string,
    username: string,
    password: string
}

export const IniciarSecion = ({ users }: Props) => {

    //hook useState para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    //hook de navegacion
    const navigation = useNavigation();

    //hook useState para manejar el estado del formulario
    const [hiddenPasword, setHiddenPasword] = useState<boolean>(true);

    //funcion para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        setFormLogin({ ...formLogin, [property]: value });
    }

    //funcion para validar el usuario y la contraseña
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.username == formLogin.username && user.password == formLogin.password);
        return existUser;
    }

    //funcion permitir iniciar sesion
    const handleLogin = (): void => {
        if (formLogin.username == '' || formLogin.password == '') {
            Alert.alert('Error', 'Ingresar todos los datos');
            return; // si falta algun campo nos saca del flujo
        }

        //verificar si el usuario existe
        if (!verifyUser()) { //verifyUser() == undefined <-- esto es igual 
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        } else {
            Alert.alert('Bienvenido');
        }
        //console.log(formLogin);
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))
    }

    const image = { uri: 'https://www.playstation.com/content/dam/global_pdc/en/campaigns-and-promotions/2024/2024-wrap-up/wallpapers/2024-WrapUp-Mobile-Wallpaper.jpg' };

    return (

        <View style={styles.container}>

            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <ImageBackground source={image} resizeMode="cover" style={styles.imagen}>

                    <SafeAreaView style={styles.ventana}>

                        <Text style={styles.tituloPrincipal}>Iniciar Sesión</Text>

                        <Text style={styles.titulo}>Usuario</Text>
                        <View>
                            <ImputComponent
                                placeholder="Usuario"
                                keyboardType="default"
                                changeForm={changeForm}
                                property='username'
                            />
                            <Text style={styles.titulo}>Contraseña</Text>
                            <ImputComponent
                                placeholder="Ejm. 123456"
                                keyboardType="numeric"
                                changeForm={changeForm}
                                property='password'
                                isPassword={hiddenPasword}
                            />

                            <Icon name={hiddenPasword ? 'visibility' : 'visibility-off'}
                                style={styles.iconForm}
                                size={30}
                                color={PRIMARY_COLOR}
                                onPress={() => setHiddenPasword(!hiddenPasword)} />
                        </View>
                        <ButtonComponent texto='Iniciar Sesión' onPress={handleLogin} />

                        <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))}>
                            <Text style={styles.registro}>Regístrate Aqui!!!</Text></TouchableOpacity>

                    </SafeAreaView>
                </ImageBackground>
            </SafeAreaView>

        </View>
    )
}

