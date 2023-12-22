import 'react-native-gesture-handler';
import { AuthProvider } from './contexts/authContext';
import { Router } from './routes/Router';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}