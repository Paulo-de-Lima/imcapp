import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('./assets/logo-app-imc.png')} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Altura</Text>
        <TextInput style={styles.campo}></TextInput>
        <Text style={styles.label}>Peso</Text>
        <TextInput style={styles.campo}></TextInput>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06C',
  },

  containerLogo: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 170,
    height: 60,
  },

  form: {
    backgroundColor: '#fff',
    padding: 30,
    height: '100%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },

  campo: {
    backgroundColor: '#DDD',
    width: '100%',
    height: 70,
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    fontSize: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 22,
  },
  btn: {
    backgroundColor: '#F90',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    height: 70,
    justifyContent: 'center',
  },
  btntext: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
  }
});
