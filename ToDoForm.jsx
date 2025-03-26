import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState('');

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
      <StatusBar style="auto" />
    </View>
  );
}
