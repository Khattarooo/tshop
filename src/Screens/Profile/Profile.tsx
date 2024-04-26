import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import CustomButton from '../../Components/Atoms/Button';
import styles from './ProfileStyles';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch} from 'react-redux';
import {resetAuthState} from '../../Redux/slices/authSlice';

const Profile = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetAuthState());
    toast.show('Logout Successful', {
      type: 'success',
      animationType: 'zoom-in',
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/w2.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.input}>email</Text>
          </View>
          <CustomButton title="Logout" onPress={handleLogout} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Profile;
