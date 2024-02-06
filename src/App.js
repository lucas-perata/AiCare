import logo from './logo.svg';
import './App.css';
import "./components/EyeCareBasic/EyeCareBasic"
import EyeCareBasic from './components/EyeCareBasic/EyeCareBasic';
import {ChakraProvider} from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="App" style={{ minHeight: "100vh" }}>
        <EyeCareBasic>  </EyeCareBasic>
      </div>
    </ChakraProvider>
  );
}

export default App;
