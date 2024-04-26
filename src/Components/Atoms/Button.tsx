import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CustomButtonProps} from '../../utils/types';

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2EA838',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CustomButton;
