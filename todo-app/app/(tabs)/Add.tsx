// This screen is for adding new tasks
import React, { useState } from 'react';
import {
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import { useTaskContext } from '@/contexts/TaskContext';
import TaskItem from '@/components/TaskItem';

export default function TasksScreen() {
  const { tasks, addTask, deleteTask, toggleTask } = useTaskContext();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTitle.trim()) {
      addTask(newTitle, newDescription);
      setNewTitle('');
      setNewDescription('');
      Alert.alert('Added', 'Task added successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a New Task</Text>
      
      {/* Input field for a new task */}
      <TextInput
        placeholder="Title"
        value={newTitle}
        onChangeText={setNewTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={newDescription}
        onChangeText={setNewDescription}
        style={styles.input}
      />

      {/* Button to add a new task */}
      <Button title="Add Task" onPress={handleAddTask} />
      <Text style={[styles.heading, { marginTop: 24 }]}>Task List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 6,
    borderRadius: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
