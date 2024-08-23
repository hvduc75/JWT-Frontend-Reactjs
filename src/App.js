import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import NavHeader from "./components/Navigation/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useContext } from "react";
import _ from "lodash";
import AppRoutes from "./routes/AppRoutes";
import { UserContext } from "./context/UserContext";
import { Rings } from 'react-loader-spinner'

function App() {
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      <Router>
        {user && user.isLoading ? (
          <div className="loading-container">
            <Rings
              height="80"
              width="80"
              color="#1877f2"
              ariaLabel="loading"
            />
            <div>Loading data...</div>
          </div>
        ) : (
          <>
            <div className="app-header">
              <NavHeader />
            </div>
            <div className="app-container">
              <AppRoutes />
            </div>
          </>
        )}
      </Router>
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
    </Fragment>
  );
}

export default App;
