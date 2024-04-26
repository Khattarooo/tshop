import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  productContainer: {
    paddingHorizontal: 15,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 15,
    fontSize: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
  },

  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 25,
    width: '50%',
    alignSelf: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.9,
    shadowRadius: 3.8,
    elevation: 10,
  },
});

export default styles;
