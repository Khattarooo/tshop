import React from 'react';
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import {resetAuthState} from '../../Redux/slices/authSlice';
import {useNavigation} from '@react-navigation/native';
import styles from './LogoutStyles';
import {useDispatch} from 'react-redux';

const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(resetAuthState());
  };

  const handleCancel = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <ImageBackground
      source={require('../../assets/w4.png')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.text}>Are you sure you want to logout?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogout}
            style={[styles.button, styles.logoutButton]}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCancel}
            style={[styles.button, styles.cancelButton]}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Logout;
