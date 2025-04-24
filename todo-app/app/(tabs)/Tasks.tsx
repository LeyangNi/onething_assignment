// Main landing screen to show the task list
import React, { useState } from 'react';
import {
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import { useTaskContext } from '@/contexts/TaskContext';
import TaskItem from '@/components/TaskItem';
import { useRouter } from 'expo-router';

export default function TasksScreen() {
  const { tasks, addTask, deleteTask, toggleTask } = useTaskContext();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const router = useRouter();

  return (
    <View style={styles.container}>

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
        // add a button to add a new task
        ListFooterComponent={
          <View style={{ marginTop: 20 }}>
            <Button title="Add a New Task" onPress={() => router.push('/Add')} />
          </View>
        }
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
