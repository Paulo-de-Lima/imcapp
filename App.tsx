import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Altura</Text>
      <TextInput style={styles.campo}></TextInput>
      <Text style={styles.label}>Peso</Text>
      <TextInput style={styles.campo}></TextInput>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Calcular</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  campo: {
    backgroundColor: '#999',
    width: '100%',
    marginBottom: 20,
    padding: 30,
    borderRadius: 10,
  },
  label: {
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#F90',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  }
  btntext: {
    textAlign: 'center',
    
  }
});
