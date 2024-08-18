import { Link } from "react-router-dom";
import "./Login.scss";

function Login(props) {
  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-sm-7 d-sm-block d-none col-0">
            <div className="brand">HVD75</div>
            <div className="detail">
              Hoang Van Duc Who will help you approach with reactjs basic
            </div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 px-3">
          <div className="brand d-sm-none d-block">HVD75</div>
            <input
              type="text"
              className="form-control"
              placeholder="Email address or phone number"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
            <span className="text-center"><Link to={"/test"} className="forgot-password">Forgot your password?</Link></span>
            <hr />
            <div className="text-center">
              <button className="btn btn-success">Create new account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
