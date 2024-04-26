import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Logo from '../../assets/logo.svg';
export const ProfileIcon = () => (
  <Image
    source={require('../../assets/profile.png')}
    style={styles.drawerIcon}
  />
);

export const AboutIcon = () => (
  <Image
    source={require('../../assets/aboutus.png')}
    style={styles.drawerIcon}
  />
);
export const LogoIconHeader = () => <Logo style={styles.drawerIcon} />;
export const LogoIconDrawer = () => <Logo style={styles.drawerLogo} />;

export const LogoIcon = () => <Logo style={styles.logoIcon1} />;

export const HomeIcon = () => (
  <Image source={require('../../assets/home1.png')} style={styles.tabIcon} />
);

export const NewsIcon = () => (
  <Image source={require('../../assets/news.png')} style={styles.tabIcon} />
);

export const SearchIcon = () => (
  <Image source={require('../../assets/search.png')} style={styles.tabIcon} />
);

const styles = StyleSheet.create({
  drawerIcon: {
    height: 50,
    width: 50,
  },
  drawerLogo: {
    height: 50,
    width: 50,
  },
  logoIcon1: {
    height: 70,
    width: 70,
  },
  tabIcon: {
    height: 30,
    width: 30,
  },
});
