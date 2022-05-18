import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from "../Screens/ToDoScreen"
import SingleScreen from "../Screens/SingleScreen"

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "ToDoScreen"
          component = {ToDoScreen}
          options={{
            headerTitle: () => <Text style={styles.header}>To-Do List</Text>,
          }}
        />
        <Stack.Screen
          name = "SingleScreen"
          component = {SingleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 50,
  },
});