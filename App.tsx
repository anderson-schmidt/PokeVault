import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/Home';
import 'react-native-reanimated';
import { Routes } from './src/components/routes';



export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
