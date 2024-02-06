import logo from './logo.svg';
import './App.css';
import "./components/EyeCareBasic/EyeCareBasic"
import EyeCareBasic from './components/EyeCareBasic/EyeCareBasic';
import {ChakraProvider} from "@chakra-ui/react"
import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <ChakraProvider>
      <div className="App flex" style={{ minHeight: "100vh", minWidth:"" }}>
        <BrowserRouter>
          <header style={{minWidth:"10%"}}><NavBar/></header>
          <main style={{minWidth:"90%"}}>
            <Routes>
              <Route path="/eyecare" element={<EyeCareBasic/>}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
