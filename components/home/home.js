import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const navigation = useNavigation();

  const [input, setInput] = useState();
  const [nome, setNome] = useState();

  useEffect(()=>{
    async function pegarNomeStorage(){
      const value = await AsyncStorage.getItem('nome');
      if(value !== null){
        setNome(value);
      }
    }
    pegarNomeStorage();
  },[]);

  useEffect(()=>{
    async function gravaNomeStorage(){
      await AsyncStorage.setItem('nome', nome);
    }
    gravaNomeStorage();
  },[nome]);

  function gravaNome(){
    setNome(input);
    alert("Nome Registrado");
  }

  function limparNome(){
    setNome('');
  }
  if(nome == null || nome == ''){
    return(
      <View style={styles.container}> 
          <Text style={styles.titulo}>Digite seu Nome:</Text>

          <TextInput 
            style={styles.input}
            value={input}
            onChangeText={(texto)=>setInput(texto)}
          />
          <TouchableOpacity style={styles.botao}
              onPress={gravaNome}
          >
              <Text style={styles.textoBotao}> Salvar </Text>
          </TouchableOpacity>

          
      </View>
    );
  }else{
  return (

    <View style={styles.container}>

        <Text style={styles.titulo}>Olá {nome} - Escolha uma opção:</Text>
        
        <TouchableOpacity style={styles.botao}
              onPress={limparNome}
          >
              <Text style={styles.textoBotao}> Limpar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate('Cadastro')}
        >
            <Text style={styles.textoBotao}> Cadastro </Text>
        </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo:{
      fontSize:30,
      textAlign:'center',
      marginTop:20
  },
  botao:{
      backgroundColor:'#ccc',
      marginTop:20,
      width:Dimensions.get('window').width-20,
      marginLeft:10,
      marginRight:10
  },
  textoBotao:{
      fontSize:25,
      textAlign:'center'
  },
  input:{
    width:Dimensions.get('window').width-20,
    height:40,
    borderColor:'#000',
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    fontSize:20
  }

});
