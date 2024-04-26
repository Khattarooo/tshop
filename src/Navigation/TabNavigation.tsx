import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Home from '../Screens/Home/Home';
import {useNavigation} from '@react-navigation/native';
import Search from '../Screens/SearchScreen/Search';
import {
  CameraIcon,
  HomeIcon,
  SearchIcon,
  LogoIconHeader,
  NewsIcon,
} from '../Components/Atoms/Icon';
import CameraScreen from '../Screens/CameraScreen/CameraScreen';
import ProductNews from '../Screens/Product News/ProductNews';

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const renderLeftButton = () => (
    <TouchableOpacity onPress={openDrawer} style={styles.touchable}>
      <Image source={require('../assets/menu.png')} style={styles.leftButton} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.background}>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarStyle: {
            marginVertical: 8,
            marginHorizontal: 10,
            height: 55,
            borderRadius: 10,
            overflow: 'hidden',
          },
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#2EA838',
        }}>
        {/* <Tab.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{
            headerTitle: 'Create Post',
            tabBarIcon: CameraIcon,
            headerLeft: renderLeftButton,
          }}
        /> */}
        <Tab.Screen
          name="ProductNews"
          component={ProductNews}
          options={{
            headerTitle: 'Product News',
            tabBarIcon: NewsIcon,
            headerLeft: renderLeftButton,
          }}
        />

        <Tab.Screen
          name=" "
          component={Home}
          options={{
            headerTitle: LogoIconHeader,
            tabBarIcon: HomeIcon,
            headerLeft: renderLeftButton,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: SearchIcon,
            headerLeft: renderLeftButton,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  leftButton: {
    height: 30,
    width: 30,
  },
  touchable: {
    marginLeft: 10,
  },
});