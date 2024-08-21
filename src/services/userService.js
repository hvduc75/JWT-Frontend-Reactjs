import axios from "../setup/axios";

const registerNewUser = (data) => {
  return axios.post("api/v1/register", data);
};

const loginUser = (valueLogin, password) => {
  return axios.post("api/v1/login", {
    valueLogin,
    password,
  });
};

const fetchAllUser = (page, limit) => {
  return axios.get(
    `api/v1/user/read?page=${page}&limit=${limit}`
  );
};

const deleteUser = (user) => {
  return axios.delete("api/v1/user/delete", {
    data: { id: user.id },
  });
};

const fetchGroup = () => {
  return axios.get("api/v1/group/read");
};

const createNewUser = (userData) => {
  return axios.post("api/v1/user/create", {
    ...userData,
  });
};

const updateCurrentUser = (userData) => {
  return axios.put("api/v1/user/update", {
    ...userData,
  });
};

export {
  registerNewUser,
  loginUser,
  fetchAllUser,
  deleteUser,
  fetchGroup,
  createNewUser,
  updateCurrentUser,
};
