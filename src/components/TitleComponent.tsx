import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'


//COMPONENTE REUTILIZABLE
interface Props { // recibe propiedades
    title: String;

}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{...styles.title,height:height*0.12 }}>{title}</Text>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
});
