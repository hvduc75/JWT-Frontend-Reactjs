import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Navigation/Nav";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/news" element={"<News />"} />
          <Route path="/contact" element={"<Contact />"} />
          <Route path="/about" element={"<About />"} />
          <Route path="/" element={"home"} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={"404 not found"} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
