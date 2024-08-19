import axios from "axios";

const registerNewUser = (data) => {
  return axios.post("http://localhost:8080/api/v1/register", data);
};

const loginUser =(valueLogin, password) => {
  return axios.post("http://localhost:8080/api/v1/login", {
    valueLogin, password
  });
}

const fetchAllUser =() => {
  return axios.get("http://localhost:8080/api/v1/user/read");
}

export { registerNewUser, loginUser, fetchAllUser };
