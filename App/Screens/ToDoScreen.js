import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import ToDo from '../Components/ToDo.js';

import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function App({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  
  // Add in hook for expo fonts
  const [loaded, error] = useFonts({ 
    Montserrat: require('../../assets/Montserrat.ttf')
  });

  const addTodo = () => {
    // Deep copy of array avoids any state mutation instead of state update rerender issues
    let newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText('');
  };

  const deleteToDo = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const renderToDo = ({ index, item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SingleScreen', {text: item, deletion: deleteToDo})}>
      <ToDo text={item} deleteToDo={() => deleteToDo(index)} />
      </TouchableOpacity>
    );
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          data={todos}
          renderItem={renderToDo}
          keyExtractor={(item, index) => keyExtractor(index)}
        />
      </View>

      <KeyboardAvoidingView
        style={styles.textinputrow}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setText(text)}
          value={text}
        />

        <Ionicons.Button name="ios-add" size={24} color="black" onPress={() => addTodo()}>Add</Ionicons.Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
  textinputrow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textinput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
  },
});