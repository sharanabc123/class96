import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default function App({ navigation, route }) {
  const { text, deletion } = route.params;

  const deletionFunc = async () => {
    await deletion();
    navigation.navigate("ToDoScreen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button style={styles.button} title="Delete" onPress={() => deletionFunc()}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
