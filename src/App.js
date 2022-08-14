import './App.css';
import Container from "../src/components/Container"

import {ThemeProvider} from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
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
