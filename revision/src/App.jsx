import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Landing = lazy(() => import("./components/Landing.jsx"));
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));

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
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/description"
            element={
              <Suspense fallback={"Loading..."}>
                <Dashboard />
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
