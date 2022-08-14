import './App.css';
import Container from "../src/components/Container"

import {ThemeProvider} from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container/>}>
            <Route path="home" element={<Container/>} />
            <Route path="contact" element={<NotFound/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
