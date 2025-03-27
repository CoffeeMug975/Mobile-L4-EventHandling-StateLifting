import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
	const [tasks, setTasks] = useState<string[]>([
		'Do Laundry',
		'Go to Gym',
		'Walk Dog',
	]);

	const addTask = (task: string) => {
		if (task.trim()) {
			setTasks([...tasks, task]);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My To-Do List</Text>
			<ToDoForm addTask={addTask} />
			<ScrollView style={styles.taskList}>
				{tasks.map((task, index) => (
					<Text key={index} style={styles.taskItem}>• {task}</Text>
				))}
			</ScrollView>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 60,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		fontWeight: 'bold',
	},
	taskList: {
		marginTop: 20,
	},
	taskItem: {
		fontSize: 18,
		marginBottom: 10,
	},
});
