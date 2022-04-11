import './App.css';
import Container from "../src/components/Container"

import {ThemeProvider} from "./context/ThemeContext";
import WordCard from './components/word-card/WordCard';

function App() {
  return (
    <ThemeProvider>
      <Container/>
    </ThemeProvider>
  );
}

export default App;
