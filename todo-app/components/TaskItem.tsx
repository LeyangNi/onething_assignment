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
        <Text style={task.completed ? styles.completed : undefined}>
          {task.title}
        </Text>
      </TouchableOpacity>
      {/* <Link href={`/(tabs)/task/${task.id}`} asChild>
        <Text style={styles.link}>📝</Text>
      </Link> */}
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.link}>Delete</Text>
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
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  link: {
    fontSize: 18,
    marginHorizontal: 8,
  },
});
