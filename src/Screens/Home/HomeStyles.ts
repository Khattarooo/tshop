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
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  noPost: {
    color: 'gray',
  },
  banner: {
    position: 'absolute',
    top: 0,
    height: 30,
    width: '100%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  bannerText: {
    fontWeight: 'bold',
  },
});
export default styles;
