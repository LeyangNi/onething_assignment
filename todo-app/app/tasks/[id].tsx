import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useTaskContext } from '@/contexts/TaskContext';

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((t) => t.id === id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Effect to set the title and description when the task changes
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [task]);

  // Function to handle saving the edited task
  const handleSave = () => {
    if (task) {
      updateTask(task.id, title, description);
      Alert.alert('Saved', 'Task updated!');
      router.back();
    }
  };

  // Function to return to the previous screen
  const returnBack = () => {
    router.back();
  };

  if (!tasks.length) {
    return (
      <View style={styles.container}>
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task: {title}</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      // Button to save changes after editing
      <Button title="Save Changes" onPress={handleSave} />
      // Button to return to the previous screen
      <Button title="Back" onPress={returnBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 18, marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
});
