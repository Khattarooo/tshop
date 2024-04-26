import React, {useState} from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomButton from '../../Components/Atoms/Button';
import axios from 'axios';
import styles from './RegistrationStyle';
import {LogoIcon} from '../../Components/Atoms/Icon';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useToast} from 'react-native-toast-notifications';
import {setAccessToken} from '../../Redux/slices/authSlice';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const onSignup = async () => {
    try {
      setLoading(true);
      const result = await axios.post(
        'https://backend-practice.euriskomobility.me/signup',
        {
          email,
          password,
          token_expires_in: '1m',
        },
      );
      console.log(result.data);

      if (result.data.accessToken) {
        dispatch(setAccessToken(result.data.accessToken));
        toast.show('Registration Successful', {
          type: 'success',
          animationType: 'zoom-in',
        });
      } else {
        // Handle error here
        toast.show('Registration failed', {
          type: 'danger',
          animationType: 'zoom-in',
        });
      }
    } catch (err) {
      toast.show('User already exists', {
        type: 'danger',
        animationType: 'zoom-in',
      });
    } finally {
      setLoading(false);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <ImageBackground
      source={require('../../assets/w2.png')}
      style={styles.background}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.heading}>
                <LogoIcon />
                <Text style={styles.heading}>T-Shop</Text>
              </View>
              <View style={styles.nameContainer}>
                <TextInput
                  style={[styles.input, styles.nameInput1]}
                  placeholder="First Name"
                  value={firstName}
                  returnKeyType="next"
                  onChangeText={setFirstName}
                />
                <TextInput
                  style={[styles.input, styles.nameInput2]}
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                returnKeyType="next"
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
              />
              {loading ? (
                <ActivityIndicator
                  animating={true}
                  size={'large'}
                  color={'#2EA838'}
                />
              ) : (
                <>
                  <CustomButton title="Sign Up" onPress={onSignup} />
                  <TouchableOpacity onPress={navigateToLogin}>
                    <Text style={styles.signInText}>
                      Already have an account? Sign in
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Registration;
