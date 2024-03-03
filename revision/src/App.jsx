import { BrowserRouter, Routes , Route, useNavigate } from "react-router-dom";
import LandingPages from "./components/LandingPages";
import Description from "./components/Description";
function App() {


  return (
    <div>
    <Appbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPages/>}/>
    <Route path="/description" element={<Description/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){

  const navigate = useNavigate();

  return(
    <div>
    <button onClick={()=> navigate("/")}>Landing-Pages</button>
    <button onClick={()=> navigate("/description")}>Description-Page</button>
    </div>
  )
} 
export default App
