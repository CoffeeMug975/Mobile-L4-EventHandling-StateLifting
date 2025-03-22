import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

export default function App() {

	const [tasks, setTasks] = useState<string[]>([
		'Do Laundry',
		'Go to Gym',
		'Walk Dog',
	])

	const addTask = (task: string) => {
		setTasks([...tasks, task]);
	};

	return (
		<View style={styles.container}>
			<ToDoForm addTask={addTask} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
