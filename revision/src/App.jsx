import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPages from "./components/LandingPages";
import Description from "./components/Description";
function App() {
  return (
    <div>
    <Appbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  //const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => window.location.href="/"}>Landing-Pages</button>
        <button onClick={() => window.location.href="/description"}>
          Description-Page
        </button>
      </div>
    </div>
  );
}
export default App;
