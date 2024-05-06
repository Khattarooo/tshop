import React from 'react';
import {StyleSheet} from 'react-native';
import Logo from '../../assets/logo.svg';
import Logout from '../../assets/logout.svg';
import About from '../../assets/about.svg';
import HomeI from '../../assets/home.svg';
import News from '../../assets/news.svg';
import SearchI from '../../assets/search.svg';
import MenuI from '../../assets/menu.svg';

export const AboutIcon = () => <About style={styles.drawerIcon} />;
export const LogoutIcon = () => <Logout style={styles.drawerIcon} />;
export const LogoIconHeader = () => <Logo style={styles.drawerIcon} />;
export const LogoIconDrawer = () => <Logo style={styles.drawerLogo} />;
export const LogoIcon = () => <Logo style={styles.logoIcon1} />;
export const PostLogo = () => <Logo style={styles.postLogo} />;
export const HomeIcon = () => <HomeI style={styles.tabIcon} />;
export const NewsIcon = () => <News style={styles.tabIcon} />;
export const SearchIcon = () => <SearchI style={styles.tabIcon} />;
export const MenuIcon = () => <MenuI style={styles.menuButton} />;

const styles = StyleSheet.create({
  drawerIcon: {
    height: 40,
    width: 40,
  },
  drawerLogo: {
    height: 40,
    width: 40,
  },
  logoIcon1: {
    height: 70,
    width: 70,
  },
  tabIcon: {
    height: 30,
    width: 30,
  },
  postLogo: {
    width: 150,
    height: 110,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  menuButton: {
    height: 30,
    width: 30,
  },
});
