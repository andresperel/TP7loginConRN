  import React, { useState } from 'react';
  import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';

  export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const login = () => {
      if (email === 'andres' && password === '1234') {
        setMensaje('Inicio de sesión exitoso');
      } else {
        setMensaje('Usuario o contraseña incorrectos, vuelva a intentar');
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>
            Login App (Tu Apellido, Tu Apellido)
          </Text>
        </View>

        <View style={styles.formulario}>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.boton} onPress={login}>
            <Text style={styles.textoBoton}>INGRESAR</Text>
          </TouchableOpacity>

          <Text style={styles.link}>Olvidaste la clave?</Text>
          <Text style={styles.link}>Crear Cuenta</Text>

          {mensaje !== '' && (
            <Text
              style={[
                styles.mensaje,
                mensaje.includes('exitoso')
                  ? styles.exito
                  : styles.error,
              ]}
            >
              {mensaje}
            </Text>
          )}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9e9e9',
    },
    header: {
      backgroundColor: '#6c3df4',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titulo: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    formulario: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
    },
    input: {
      borderWidth: 1,
      borderColor: '#6c3df4',
      borderRadius: 5,
      padding: 15,
      marginBottom: 15,
      backgroundColor: 'white',
    },
    boton: {
      backgroundColor: '#8a63ff',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    textoBoton: {
      color: 'white',
      fontSize: 18,
    },
    link: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 18,
    },
    mensaje: {
      textAlign: 'center',
      marginTop: 25,
      fontWeight: 'bold',
    },
    exito: {
      color: 'green',
    },
    error: {
      color: 'red',
    },
  });