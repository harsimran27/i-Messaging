import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import Signin from "./Signin";

function App() {
  return (
    <>
      {/* <Router> */}
        <div className="app">
          {/* <Routes> */}
            {/* <Route path="/signin"> */}
              {/* <Signin /> */}
            {/* </Route> */}
            {/* <Route path="/login"> */}
              {/* <Login /> */}
            {/* </Route> */}
            {/* <Route path="/"> */}
              <Sidebar />
              <Chat />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
