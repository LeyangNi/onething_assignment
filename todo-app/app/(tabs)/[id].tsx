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

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (task) {
      updateTask(task.id, title, description);
      Alert.alert('Saved', 'Task updated!');
      router.back();
    }
  };

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Editing Task: {task.id}</Text>
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
      <Button title="Save Changes" onPress={handleSave} />
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
