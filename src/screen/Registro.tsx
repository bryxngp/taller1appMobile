import React, { useState } from 'react'
import { Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { SafeAreaView } from 'react-native-safe-area-context';
import { User } from '../navegacion/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ImputComponent } from '../components/Imputcomponent';
import { ButtonComponent } from '../components/ButtonComponent';

//interface para las propiedades
interface Props {
    users: User[];
    addUser: (user: User) => void;
}

//interface para el formulario de registro
interface FormRegister {
    name: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
}

export const Registro = ({ users, addUser }: Props) => {

    //hook de navegacion
    const navigation = useNavigation();

    //hook useState para manejar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
    })

    //funcion para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        //modificar el estado del formulario
        setFormRegister({ ...formRegister, [property]: value })
    }

    //duncion para verificar si existe el usuario
    const verifyUsername = (): User | undefined => {
        const existUsername = users.find(user => user.username == formRegister.username)
        return existUsername;
    }

    //funcion para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length + 1; //length devuelve el numero de elementos del arreglo
        return getId;
    }

    //funcion permitir registro
    const handleSingUp = (): void => {
        //validar el formulario
        if (formRegister.name == '' || formRegister.username == '' || formRegister.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos')
            return;
        }

        //validar que no exista el usuario
        if (verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe')
            return;
        }

        //crear el nuevo usuario ( objeto )
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            username: formRegister.username,
            password: formRegister.password
        }

        //agregar el nuevo usuario en el arreglo
        addUser(newUser);
        Alert.alert('Exito', 'Usuario agregado con exito')
        navigation.goBack();
        //console.log(formRegister);
    }

    const image = { uri: 'https://www.playstation.com/content/dam/global_pdc/en/campaigns-and-promotions/2024/2024-wrap-up/wallpapers/2024-WrapUp-Mobile-Wallpaper.jpg' };

    return (

        <View style={styles.container}>

            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <ImageBackground source={image} resizeMode="cover" style={styles.imagen}>

                    <SafeAreaView style={styles.ventana}>

                        <Text style={styles.tituloPrincipal}>Registro</Text>

                        <Text style={styles.titulo}>Nombre:</Text>
                        <View>
                            <ImputComponent
                                placeholder="Ingresar Nombre:"
                                keyboardType='default'
                                changeForm={changeForm}
                                property='name'
                            />
                            <Text style={styles.titulo}>Apellido:</Text>
                            <ImputComponent
                                placeholder="Ingresar Apellido:"
                                keyboardType='default'
                                changeForm={changeForm}
                                property='lastname'
                            />
                            <Text style={styles.titulo}>Correo Electronico:</Text>
                            <ImputComponent
                                placeholder="Ingresar Correo Electronico:"
                                keyboardType='email-address'
                                changeForm={changeForm}
                                property='email'
                            />
                            <Text style={styles.titulo}>Usuario:</Text>
                            <ImputComponent
                                placeholder="Ingresar Usuario:"
                                keyboardType='default'
                                changeForm={changeForm}
                                property='username'
                            />
                            <Text style={styles.titulo}>Contraseña:</Text>
                            <ImputComponent
                                placeholder="Ingresar Contraseña:"
                                keyboardType='numeric'
                                changeForm={changeForm}
                                property='password'
                            />
                        </View>

                        <ButtonComponent texto='Registrar' onPress={handleSingUp} />

                        <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'IniciarSecion' }))}>
                            <Text style={styles.textRedirect}>Ya tienes cuenta? Inicia Sesión</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </ImageBackground>
            </SafeAreaView>
        </View>
    )
}
