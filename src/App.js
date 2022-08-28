import './App.css';
import {ThemeProvider} from "./Context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import AppLayout from './Layout/Layout';


function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
            <AppLayout/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
