import './App.css';
import Container from "../src/Components/Container"
import {ThemeProvider} from "./Context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound';
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
