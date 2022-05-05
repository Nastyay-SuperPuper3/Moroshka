import { StatusBar } from 'expo-status-bar';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <AppNavigator>
      <StatusBar style="auto" />
    </AppNavigator>
  );
}
