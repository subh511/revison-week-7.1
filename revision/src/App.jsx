import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const LandingPages = lazy(() => import("./components/LandingPages"));
const Description = lazy(() => import("./components/Description"));
import { lazy, Suspense } from "react";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading..."}>
                <LandingPages />
              </Suspense>
            }
          />
          <Route
            path="/description"
            element={
              <Suspense fallback={"Loading..."}>
                <Description />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  //{navigate("/")}
  //{navigate("/description")}
  // window.location.href = "/";
  //window.location.href = "/description";
  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>Landing-Pages</button>
        <button onClick={() => navigate("/description")}>
          Description-Page
        </button>
      </div>
    </div>
  );
}
export default App;
