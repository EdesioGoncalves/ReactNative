import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput, //para imputar dados
  Platform, //avalia em qual S.O. está sendo executado
  FlatList, //recomendado para listas devido a performance
  StatusBar 
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
  //useState retorna um array com duas posições
  const [newSkill, setNewSkill] = useState('');
  //cria um array de habilidades
  const [mySkill, setMySkill] = useState([]);
  const [gretting, setGretting] = useState('');

  //função para adicionar uma nova habilidade
  //por conversão, usar o handle nonme da função sempre que a ação seja disparada por um clique do usuário
  function handleAddNewSkill(){
    //... é o operador spread que faz com que o array seja copiado
    setMySkill(oldSkills => [...oldSkills, newSkill]);
  }

  //recebe dois parâmetros, uma função e um array
  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12){
      setGretting('Good morning');
    } else if(currentHour >= 12 && currentHour < 18){
      setGretting('Good afternoon');
    } else {
      setGretting('Good night');
    }
  }, [])

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem-vindo, Edésio.
      </Text>

      <Text style={{}}>
        {gretting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      
      <Button onPress={handleAddNewSkill} />

      <Text
        style={[styles.title, { marginVertical: 50 }]} >
        My Skills
      </Text>

      {/* FlatLit
        // recomendado para listas devido a performance
        // substitui o map
        // necessario passar um array como parametro
      */}
      <FlatList
        data={mySkill} //array de dados
        keyExtractor={item => item} //função para identificar cada item
        renderItem={({ item }) => ( //função para renderizar cada item
          <SkillCard skill={item} />
        )}
      />

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
    }
});
