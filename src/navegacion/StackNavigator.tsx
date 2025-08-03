import { createStackNavigator } from '@react-navigation/stack';
import { IniciarSecion } from '../screen/IniciarSesion';
import { Registro } from '../screen/Registro';

export type RootStackParams = {
    IniciarSecion: undefined,
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
            <Stack.Screen name="IniciarSecion" options={{ title: 'Home' }} component={IniciarSecion} />
            <Stack.Screen name="Registro" component={Registro} />
        </Stack.Navigator>
    );
}