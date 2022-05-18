import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function ToDo(props) {
  return (
    <GestureRecognizer onSwipeRight={props.deleteToDo} style={styles.todo}>
      <Text>{props.text}</Text>
      <Button style={styles.button} title="Delete" onPress={props.deleteToDo}/>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  todo: {
    height: 50,
    width: '100%',
    backgroundColor: "#b3ffb3",
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    height: 40,
    width: '20%',
    borderColor: 'gray',
    borderWidth: 1,
  },
});