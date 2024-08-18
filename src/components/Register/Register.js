import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

function Register(props) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
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
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Confirm password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>

            <button className="btn btn-primary">Register</button>

            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={handleLogin}>
                Already've an account, Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
