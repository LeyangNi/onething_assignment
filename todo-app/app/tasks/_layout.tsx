import { TaskProvider } from '@/contexts/TaskContext';
import { Stack } from 'expo-router';

export default function TasksStackLayout() {
  return (
    <TaskProvider>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
    </TaskProvider>
  );
}
