import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Registro } from './src/screen/Registro'
import { IniciarSecion } from './src/screen/IniciarSesion'

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Registro />
      {/* <IniciarSecion /> */}
    </SafeAreaView>
  )
}

export default App;