import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput, //para imputar dados
  Platform, //avalia em qual S.O. está sendo executado
  TouchableOpacity //elemente de clique transparente
} from 'react-native';

export function Home(){
  //useState retorna um array com duas posições
  const [newSkill, setNewSkill] = useState('');
  //cria um array de habilidades
  const [mySkill, setMySkill] = useState([]);

  //função para adicionar uma nova habilidade
  //por conversão, usar o handle nonme da função sempre que a ação seja disparada por um clique do usuário
  function handleAddNewSkill(){
    //... é o operador spread que faz com que o array seja copiado
    setMySkill(oldSkills => [...oldSkills, newSkill])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem-vindo, Edésio.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text
        style={[styles.title, { marginVertical: 50 }]} >
        My Skills
      </Text>

      {/* Usar chaves neste local significa mesclar código JavaScript com .JSX  */}
      {
        mySkyll.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))
      }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
      backgroundColor: '#1F1E25',
      color: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 30,
      borderRadius: 7
    },
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold'
    },
    buttonSkill: {
      backgroundColor: '#1F1E25',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10
    },
    textSkill: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold'
    }
});
