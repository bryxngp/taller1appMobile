import React, { useState } from 'react';
import { Image, Text, View, Modal, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../themes/appTheme';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { Product } from '../HomeScreen';

// Props del componente
interface Props {
    visible: boolean;
    item: Product;
    setModalVisible: () => void;
    updateStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({ visible, item, setModalVisible, updateStock }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);

    const { width } = useWindowDimensions();

    const handleAddCart = () => {
        updateStock(item.id, quantity);
        setModalVisible();
        setQuantity(1);
    };

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>
                            {item.name} - ${item.price.toFixed(2)} c/u
                        </Text>
                        <Icon
                            name='cancel'
                            color={'black'}
                            size={25}
                            style={localstyles.iconCancel}
                            onPress={setModalVisible}
                        />
                    </View>

                    <Image style={styles.image1} source={{ uri: item.pathImage }} />

                    {item.stock === 0 ? (
                        <Text style={styles.textAgotado}>Producto Agotado</Text>
                    ) : (
                        <View>
                            <View style={styles.containerQuantity}>
                                <TouchableOpacity
                                    style={styles.buttonQuantity}
                                    onPress={() => setQuantity(quantity + 1)}
                                    disabled={quantity == item.stock}
                                >
                                    <Text style={styles.buttonQuantityText}>+</Text>
                                </TouchableOpacity>

                                <Text style={styles.textQuantity}>{quantity}</Text>

                                <TouchableOpacity
                                    style={styles.buttonQuantity}
                                    onPress={() => setQuantity(quantity - 1)}
                                    disabled={quantity === 1}
                                >
                                    <Text style={styles.buttonQuantityText}>-</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textQuantity}>
                                    Total: ${(item.price * quantity).toFixed(2)}
                                </Text>
                            </View>

                            <TouchableOpacity style={styles.buttonAddCart} onPress={handleAddCart}>
                                <Text style={styles.buttonAddCartText}>Agregar al carrito</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

export const localstyles = StyleSheet.create({
    iconCancel: {
        color: PRIMARY_COLOR,
        alignItems:'flex-end'
    },
})