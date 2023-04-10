import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    // alert(nome);
    // alert(email);
    // alert(senha);
    // fazer chamada no back-end para cadastro.
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{ width: 200, height: 200 }} source={require('./assets/login.png')} />

      <TextInput placeholder="Seu nome..." style={styles.textInput} onChangeText={text => setNome(text)} />
      <TextInput placeholder="Seu e-mail..." style={styles.textInput} onChangeText={text => setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder="Sua Senha..." style={styles.textInput} onChangeText={text => setSenha(text)} />
      <View style={styles.boxBtn}>
        <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro}>
          <Text style={styles.textBtn}>CADASTRAR!</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  boxBtn:{
    width: '50%',
    backgroundColor: '#f76bc1',
    borderRadius: 20,
    justifyContent: 'center',
  },
  btnCadastro: {
    height: 40,
    backgroundColor: '#7b44#2f5',
    borderRadius: 20,
    justifyContent: 'center',
  },
  textBtn: {
    color: 'white',
    textAlign: 'center'
  },
});
