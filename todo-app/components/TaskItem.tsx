// import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/task';
import { Link } from 'expo-router';

interface Props {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={{ flex: 1 }}>
        <Text style={task.completed ? styles.completed : styles.taskstyle}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <Link href={`/tasks/${task.id}`} asChild>
        <Text style={styles.edittext}>Edit</Text>
      </Link>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deletetext}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    fontSize: 18,
    marginHorizontal: 8,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  link: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  deletetext: {
    color: 'red',
    fontSize: 16,
    marginHorizontal: 10,
  },
  edittext: {
    color: 'green',
    fontSize: 16,
    marginHorizontal: 10,
  },
  taskstyle: {
    fontSize: 18,
    marginHorizontal: 8,
  },
});
