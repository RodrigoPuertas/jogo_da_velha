import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    fontSize: 36,
  },
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0066cc',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default styles;
