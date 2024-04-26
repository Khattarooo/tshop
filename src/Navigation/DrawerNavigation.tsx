import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Profile from '../Screens/Profile/Profile';
import AboutUs from '../Screens/AboutUs/AboutUs';
import Logo from '../assets/logo.svg';

import {useNavigation} from '@react-navigation/native';
import {ProfileIcon, AboutIcon, LogoIconDrawer} from '../Components/Atoms/Icon';
const Drawer = createDrawerNavigator();

const CustomDrawerIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Logo style={styles.drawerIcon} />
    </TouchableOpacity>
  );
};
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      screenOptions={{
        drawerIcon: CustomDrawerIcon,
        headerTitleAlign: 'center',
        drawerActiveBackgroundColor: '#2EA838',
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {fontSize: 20, marginVertical: 10},
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          headerShown: false,
          drawerIcon: LogoIconDrawer,
          drawerItemStyle: {
            borderRadius: 15,
          },
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          drawerIcon: ProfileIcon,
          drawerItemStyle: {
            borderRadius: 15,
          },
        }}
      />

      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          headerShown: true,
          drawerIcon: AboutIcon,
          drawerItemStyle: {
            borderRadius: 15,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerIcon: {
    height: 40,
    width: 40,
  },
});
export default DrawerNavigation;
