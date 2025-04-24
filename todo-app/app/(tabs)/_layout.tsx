import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TaskProvider } from '@/contexts/TaskContext';

export default function TabLayout() {
  return (
    // Use the TaskProvider to wrap the Tabs
    // This will provide the task context to all screens in the tabs
    // This is the main layout for the tabs
    <TaskProvider>
    <Tabs>
      <Tabs.Screen
        name="Tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    </TaskProvider>
  );
}
