import axios from "../setup/axios";

const createRole = (roles) => {
  return axios.post("api/v1/role/create", [...roles]);
};

const fetchAllRole = () => {
  return axios.get("api/v1/role/read");
};

const deleteRole = (roles) => {
  return axios.delete("api/v1/role/delete", { data: { id: roles.id } });
};

export { createRole, fetchAllRole, deleteRole };
