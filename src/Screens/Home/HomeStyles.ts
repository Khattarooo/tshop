import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  productContainer: {
    paddingHorizontal: 15,
  },

  banner: {
    position: 'absolute',
    top: 0,
    height: 30, // Set your preferred height
    width: '100%', // Make sure the width is enough to fit the screen
    backgroundColor: 'yellow', // Choose a noticeable color
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Make sure the banner is above other elements
  },
  bannerText: {
    fontWeight: 'bold',
  },
});
export default styles;
