import React from 'react'
import { Image, Text } from 'react-native'
import { Modal, View } from 'react-native'
import { PRIMARY_COLOR } from '../../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../themes/appTheme';
import { Product } from '../HomeScreen';

//interface para las propiedades
interface Props {
    visible: boolean;
    item: Product;
    setModalVisible: () => void;
}

export const ModalProduct = ({ visible, item, setModalVisible }: Props) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.modal}>
                    <View>
                        <Icon name='cancel'
                            color={PRIMARY_COLOR}
                            style={styles.iconClose}
                            onPress={setModalVisible}
                        />
                    </View>
                    <Image style={styles.imageModul} source={{ uri: item.pathImage }} />
                    <Text style={styles.textModul}>{item.name}</Text>
                </View>
            </View>
        </Modal>
    )
}
