// import { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// const Landing = lazy(() => import("./components/Landing.jsx"));
// const Dashboard = lazy(() => import("./components/Dashboard.jsx"));

import { useContext, useState } from "react";
import { CountContext } from "./components/ContextApi";

function App() {

  const [count,setCount] = useState(0)

  return (
    <div>
    <CountContext.Provider value={count}>
    <Count setCount={setCount}/>
    </CountContext.Provider>
    </div>
  );
}

function Count({setCount}){
  return(
    <div>
    <CountRenderer/>
    <Button setCount={setCount}/>
    </div>
  )
}
function CountRenderer(){
  const count = useContext(CountContext)
  return(
    <div>{count}</div>
  )
}
function Button({setCount}){

  const count = useContext(CountContext)
  return(
    <div>
    <button onClick={()=> setCount(count+1)}>add</button>
    <button onClick={()=> setCount(count-1)}>Subtract</button>
    </div>
  )
}

// <BrowserRouter>
// <Appbar />
// <Routes>
//   <Route
//     path="/"
//     element={
//       <Suspense fallback={"Loading..."}>
//         <Landing />
//       </Suspense>
//     }
//   />
//   <Route
//     path="/description"
//     element={
//       <Suspense fallback={"Loading..."}>
//         <Dashboard />
//       </Suspense>
//     }
//   />
// </Routes>
// </BrowserRouter>

// function Appbar() {
//   const navigate = useNavigate();
//   //{navigate("/")}
//   //{navigate("/description")}
//   // window.location.href = "/";
//   //window.location.href = "/description";
//   return (
//     <div>
//       <div>
//         <button onClick={() => navigate("/")}>Landing-Pages</button>
//         <button onClick={() => navigate("/description")}>
//           Description-Page
//         </button>
//       </div>
//     </div>
//   );
// }
export default App;
