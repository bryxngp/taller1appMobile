import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Registro } from './src/screen/Registro'

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Registro />
    </SafeAreaView>
  )
}

export default App;