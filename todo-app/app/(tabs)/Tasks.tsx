import React, { useState } from 'react';
import {
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import { Task } from '../../types/task';
import { mockTasks } from '../../data/tasks';
import TaskItem from '@/components/TaskItem';

export default function TasksScreen() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');

  const addTask = () => {
    if (newTitle.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTitle,
        description: newDescription,
        completed: false,
      };
      setTasks((prev) => [...prev, newTask]);
      setNewTitle('');
      setNewDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📝 Add a New Task</Text>
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
      <Button title="Add Task" onPress={addTask} />

      <Text style={[styles.heading, { marginTop: 24 }]}>📋 Task List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() =>
              setTasks((prev) =>
                prev.map((t) =>
                  t.id === item.id ? { ...t, completed: !t.completed } : t
                )
              )
            }
            onDelete={() =>
              setTasks((prev) => prev.filter((t) => t.id !== item.id))
            }
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
