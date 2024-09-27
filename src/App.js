import Body from "./Components/Pages/HomePages/Body";
import { BrowserRouter, Routes , Route} from "react-router-dom"
import Login from "./Components/Pages/LoginPage/Login";
import Register from "./Components/Pages/Register/Register";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      
      <Route path="/" element={<Body/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
