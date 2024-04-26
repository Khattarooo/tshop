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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  nameInput1: {
    width: '48%',
  },
  nameInput2: {
    width: '48%',
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
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
