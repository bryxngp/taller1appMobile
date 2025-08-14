import { createStackNavigator } from '@react-navigation/stack';
import { IniciarSecion } from '../screen/IniciarSesion';
import { Registro } from '../screen/Registro';
import { useState } from 'react';
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';

//definir una interfas para los objetos de mi arreglo users
export interface User {
    id: number,
    name: string,
    username: string,
    password: string
}

//arreglo con la lista de usuarios
const users: User[] = [
    { id: 1, name: 'Roy Armijos', username: 'Rarmijos', password: '123' },
    { id: 2, name: 'Bryan Guanoluisa', username: 'Bguanoluisa', password: '456' },
    { id: 3, name: 'Cristian Amagua', username: 'Camagua', password: '789' },
];

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //hook useState permitir gestionar el estado del arreglo de los usuarios
    const [listUsers, setListUsers] = useState<User[]>(users);

    //funcion para agregar un nuevo usuario
    const addUser = (user: User) => {
        //modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#04a5b1ff',
                },
                headerShown:false,
            }}
        >
            <Stack.Screen name="IniciarSecion" options={{ headerShown: false }} children={() => <IniciarSecion users={listUsers} />} />
            {/* <Stack.Screen name="Registro" options={{ headerShown: false }} children={() => <Registro users={listUsers} addUser={addUser} />} /> */}
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
    );
}