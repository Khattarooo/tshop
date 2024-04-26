import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const AboutUs = () => {
  return (
    <ImageBackground
      source={require('../../assets/w3.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <View style={styles.content}>
            <Text style={styles.heading}>Welcome to T-Shop</Text>
            <Text style={styles.description}>
              T-Shop is your go-to app for all your grocery needs.
            </Text>
            <Text style={styles.description}>
              Explore a wide variety of fresh fruits and vegetables, sourced
              directly from local markets.
            </Text>
            <Text style={styles.description}>
              Stay updated with the latest product news and offers to make
              informed shopping decisions.
            </Text>
            <View style={styles.contactContainer}>
              <Text style={styles.contactLabel}>Contact us:</Text>
              <Text style={styles.contact}>support@Tshop.com</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContainer: {
    height: '60%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  description: {
    fontSize: 20,
    marginBottom: 15,
    color: 'black',
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  contactLabel: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 20,
    color: 'black',
  },
});

export default AboutUs;
