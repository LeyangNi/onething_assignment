import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function App() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
        setTask('');
      }
    };
  
    const toggleComplete = (id) => {
      setTasks(tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ));
    };
  
    const deleteTask = (id) => {
      setTasks(tasks.filter(t => t.id !== id));
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={() => toggleComplete(item.id)} style={{ flex: 1 }}>
          <Text style={[styles.taskText, item.completed && styles.completedText]}>
            {item.text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleComplete(item.id)}>
          <Text style={styles.statusText}>
            {item.completed ? 'Done' : 'Ongoing'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <Text style={styles.deleteButton}>delete</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add a task..."
            value={task}
            onChangeText={setTask}
            style={styles.input}
          />
          <Button title="Add" onPress={addTask} />
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 50,
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      gap: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#aaa',
      flex: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    taskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
    taskText: {
      fontSize: 18,
    },
    statusText: {
      fontSize: 16,
      marginLeft: 10,
      color: 'blue',
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
    deleteButton: {
      marginLeft: 10,
      fontSize: 16,
      color: 'red',
    },
  });