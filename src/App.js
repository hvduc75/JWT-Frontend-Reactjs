import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Navigation/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, } from "react";
import _ from "lodash";
import AppRoutes from "./routes/AppRoutes";

function App() {
  
  return (
    <Fragment>
      <Router>
        <div className="app-header">
        <Nav />
        </div>
        <div className="app-container">
          <AppRoutes/>
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
    </Fragment>
  );
}

export default App;
