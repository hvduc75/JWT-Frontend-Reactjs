import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Navigation/Nav";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Nav /> */}
        <Routes>
          <Route path="/news" element={"<News />"} />
          <Route path="/contact" element={"<Contact />"} />
          <Route path="/about" element={"<About />"} />
          <Route path="/" element={"home"} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={"404 not found"} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
