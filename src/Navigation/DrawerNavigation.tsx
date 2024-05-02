import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import AboutUs from '../Screens/AboutUs/AboutUs';
import {AboutIcon, LogoIconDrawer, LogoutIcon} from '../Components/Atoms/Icon';
import LogoutPrompt from '../Screens/Logout/Logout';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      screenOptions={{
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

      <Drawer.Screen
        name="Logout"
        component={LogoutPrompt}
        options={{
          drawerIcon: LogoutIcon,
          drawerItemStyle: {
            borderRadius: 15,
          },
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
