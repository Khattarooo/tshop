// PostCardStyles.tsx
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.9,
    shadowRadius: 3.8,
    elevation: 10,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: 'grey',
  },
  outOfStock: {
    fontSize: 20,
    color: 'red',
  },
});

export default styles;
