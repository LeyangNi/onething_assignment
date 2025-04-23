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
        <Text style={task.completed ? styles.completedstatus : styles.pendingstatus}>
          {task.completed ? 'Completed' : 'Pending'}
      </Text>
      </TouchableOpacity>

      // add a view button to see the details of the task
      <Link href={`/tasks/view/${task.id}`} asChild>
        <Text style={styles.edittext}>View</Text>
      </Link>

      {/* <TouchableOpacity onPress={onToggle} style={{ flex: 0 }}>
    
      </TouchableOpacity> */}
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
  pendingstatus: {
    fontSize: 16,
    marginHorizontal: 8,
    color: 'blue', 
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
  completedstatus:{
    fontSize: 16,
    marginHorizontal: 8,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
