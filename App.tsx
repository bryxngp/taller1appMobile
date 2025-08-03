import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Registro } from './src/screen/Registro'
import { IniciarSecion } from './src/screen/IniciarSesion'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navegacion/StackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;