import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Topo } from './components/Topo';
import { Resultado } from './components/Resultado';

export default function App() {
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [imc, setIMC] = useState<number | null>(null);
    const [mensagem, setMsg] = useState<string | null>(null);

     function validarCampos() {
        // Verifica se as variáveis estão vazias
        if (peso !== '' && altura !== '') {
            const pesoNum = Number.parseFloat(peso);
            const alturaNum = Number.parseFloat(altura);
            if ((pesoNum >= 0 && pesoNum <= 500) && (alturaNum >= 0 && alturaNum <= 3)) {
                calcularIMC()
                setMsg(null)
            } else {
                setMsg("Um dos valores informados é inválido")
                setIMC(null)
            }
        } else {
            setMsg("O peso e a altura devem ser informados")
            setIMC(null)
        }
    }

    function calcularIMC() {
        let imcCalculado = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
        setIMC(imcCalculado);
    }

    return (
        <View style={styles.container}>
            <Topo/>

            <View style={styles.form}>
                {mensagem != null && (
                    <Text style={styles.alerta}>{mensagem}</Text>
                )}

                <Text style={styles.label}>Altura</Text>
                <TextInput style={styles.campo} keyboardType='numeric' onChangeText={setAltura}></TextInput>

                <Text style={styles.label}>Peso</Text>
                <TextInput style={styles.campo} keyboardType='numeric' onChangeText={setPeso}></TextInput>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={validarCampos}
                >
                    <Text style={styles.btntext}>Calcular</Text>
                </TouchableOpacity>

                {imc != null && (
                    <Resultado resultadoIMC={imc} />
                )}
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
    form: {
        backgroundColor: '#FFF',
        padding: 30,
        height: '100%',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30
    },
    campo: {
        backgroundColor: '#DDD',
        width: '100%',
        height: 70,
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
        fontSize: 20
    },
    label: {
        marginBottom: 10,
        fontSize: 22
    },
    btn: {
        backgroundColor: '#F90',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 50,
        height: 70,
        justifyContent: 'center'
    },
    btntext: {
        textAlign: 'center',
        fontSize: 22,
        color: '#FFF',
    },
    alerta: {
        textAlign: 'center',
        backgroundColor: "#F00",
        color: "#FFF",
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20
    }
});