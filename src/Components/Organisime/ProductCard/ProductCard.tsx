import React, {useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import {styles, modalStyles} from './ProductCardStyles';
import {ProductProps} from '../../../utils/types';
const ProductCard: React.FC<ProductProps> = ({
  image,
  Name,
  price,
  currency,
  unit,
  isAvailable,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [convertedPrice, setConvertedPrice] = useState<string | number>(price);

  const handleLongPress = () => {
    setModalVisible(true);
    if (currency === 'USD') {
      const conversionRate = 90000;
      const formattedPrice = (price * conversionRate)
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setConvertedPrice(formattedPrice);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onLongPress={handleLongPress}
        style={styles.postContainer}>
        <View style={styles.header}>
          {image ? (
            <Image style={styles.postImage} source={{uri: image}} />
          ) : (
            <Text>No Image Available</Text>
          )}
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{Name}</Text>
            {isAvailable ? (
              <Text style={styles.price}>
                {price} {currency}/{unit}
              </Text>
            ) : (
              <Text style={styles.outOfStock}>Out Of Stock</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
      {isAvailable && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <TouchableOpacity
            style={modalStyles.centeredView}
            activeOpacity={1}
            onPressOut={closeModal}>
            <View style={modalStyles.modalView}>
              {image ? (
                <Image style={styles.postImage} source={{uri: image}} />
              ) : (
                <Text>No Image Available</Text>
              )}
              <Text style={styles.name}>{Name}</Text>
              <Text style={styles.price}>
                {convertedPrice} LBP/{unit}
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

export default ProductCard;
