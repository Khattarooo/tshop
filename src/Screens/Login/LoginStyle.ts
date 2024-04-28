import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    width: '90%',
    backgroundColor: '#72d87a',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
  },
  heading: {
    fontSize: 22,
    marginBottom: 10,
    color: 'black',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  input: {
    width: '90%',
    height: 40,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  signInText: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});
export default styles;
