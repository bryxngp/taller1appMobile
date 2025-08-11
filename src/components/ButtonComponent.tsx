import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { styles } from '../themes/appTheme';

interface Props {
    texto: string;
    onPress: () => void;
}

export const ButtonComponent = ({ texto, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.boton} onPress={onPress}>
            <Text style={styles.botonTexto}>{texto}</Text>
        </TouchableOpacity>
    )
}