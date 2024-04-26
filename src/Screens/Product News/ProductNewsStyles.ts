import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  postsContainer: {
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
});
export default styles;
