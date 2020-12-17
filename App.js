import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style= {styles.imagelogo}source={{uri: 'https://www.argo3000.it/wp-content/uploads/2020/09/react-1-300x300.png'}} />
      
      <View style={styles.containerEmailSenha}>
        <Text style={styles.textEmailSenha}>
          email:
        </Text>
        <TextInput style={styles.emailSenhaTextInput} />
      </View>
      
      <View style={styles.containerEmailSenha}>
        <Text style={styles.textEmailSenha}>
          senha:
        </Text>
        <TextInput style={styles.emailSenhaTextInput} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white', fontSize: 18}}> Login </Text>
      </TouchableOpacity>

      <Text style={{fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', color: 'blue'}}>Cadastre-se</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerEmailSenha: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imagelogo: {
    width: 130,
    height: 130,
    alignSelf: 'center'
  },
  textEmailSenha: {
    paddingEnd: 5,
    justifyContent: 'flex-start'
  },
  emailSenhaTextInput: {
    borderColor: 'black',
    marginTop: 7,
    marginBottom: 7,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    height: 45,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: 'steelblue',
    width: 200,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  }
});
