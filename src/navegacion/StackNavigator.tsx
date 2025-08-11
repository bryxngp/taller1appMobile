import { createStackNavigator } from '@react-navigation/stack';
import { IniciarSesion } from '../screen/IniciarSesion';
import { Registro } from '../screen/Registro';

export type RootStackParams = {
    IniciarSesion: undefined,
    Registro: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#04a5b1ff',
                },
                headerShown:false,
            }}
        >
            <Stack.Screen name="IniciarSesion" options={{ title: 'Home' }} component={IniciarSesion} />
            <Stack.Screen name="Registro" component={Registro} />
        </Stack.Navigator>
    );
}