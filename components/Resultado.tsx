import { Text, View, StyleSheet } from "react-native";

export function Resultado(props:{resultadoIMC: number}) {

    let color;
    let classificacao;

    if (props.resultadoIMC < 18.5) {
        classificacao = "Abaixo do peso";
        color = styles.perigo;
    } else if (props.resultadoIMC  < 25) {
        classificacao = "Peso Normal";
        color = styles.normal;
    } else if (props.resultadoIMC  < 30) {
        classificacao = "Sobrepeso";
        color = styles.alerta;
    } else {
        classificacao = "Obeso";
        color = styles.perigo;
    }

    return (
        <View style={styles.resultado}>
            <Text style={styles.labelResultado}>Seu IMC é:</Text>
            <Text style={styles.resultadoIMC}>{props.resultadoIMC?.toFixed(1)}</Text>
            <Text style={styles.labelResultado}>Classicação:</Text>
            <Text style={[color, styles.classificacaoIMC]}>{classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    perigo: {
        backgroundColor: "#F00",
    },
    alerta: {
        backgroundColor: "#FB0"
    },
    normal: {
        backgroundColor: "#32CD32"
    },
    resultado: {
        backgroundColor: "#EEE",
        padding: 20,
        borderRadius: 20,
    },
    labelResultado: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 800,
        marginBottom: 10
    },
    resultadoIMC: {
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10
    },
    classificacaoIMC: {
        color: "#FFF",
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10
    },
})