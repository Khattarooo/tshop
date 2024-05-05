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
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useToast} from 'react-native-toast-notifications';
import styles from './LoginStyle';
import {LogoIcon} from '../../Components/Atoms/Icon';
import {useNavigation} from '@react-navigation/native';
import {setAccessToken, setRefreshToken} from '../../Redux/slices/authSlice';
import CustomButton from '../../Components/Atoms/Button';
import {api} from '../../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = async () => {
    try {
      setLoading(true);
      const result = await api.post('login', {
        email,
        password,
        token_expires_in: '0.5m',
      });
      handleLoginResponse(result.data);
    } catch (err) {
      toast.show('Invalid email or password', {
        type: 'danger',
        animationType: 'zoom-in',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginResponse = (data: any) => {
    dispatch(setAccessToken(data.accessToken));
    dispatch(setRefreshToken(data.refreshToken));
    toast.show('Login Successful', {
      type: 'success',
      animationType: 'zoom-in',
    });
  };
  const isSignUpDisabled = !email || !password || loading;

  const navigateToRegister = () => {
    navigation.navigate('Registration' as never);
  };

  return (
    <ImageBackground
      source={require('../../assets/w1.png')}
      style={styles.background}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.heading}>
              <LogoIcon />
              <Text style={styles.heading}>T-Shop</Text>
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
            {loading ? (
              <ActivityIndicator
                animating={true}
                size={'large'}
                color={'white'}
              />
            ) : (
              <>
                <CustomButton
                  title="Login"
                  disabled={isSignUpDisabled}
                  onPress={onLogin}
                />
                <TouchableOpacity onPress={navigateToRegister}>
                  <Text style={styles.signInText}>
                    Don't have an account? Register now
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;
