import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectIsAuthenticated} from '../Redux/slices/authSlice';
import InitialNavigation from './InitialNavigation';
import DrawerNavigation from './DrawerNavigation';

const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigation /> : <InitialNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
