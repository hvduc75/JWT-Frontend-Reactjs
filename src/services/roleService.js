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

const fetchRolesByGroup = (groupId) => {
  return axios.get(`api/v1/role/by-group${groupId}`);
};

const assignRoleToGroup = (data) => {
  return axios.post("api/v1/role/assign-to-group", { data });
};

export { createRole, fetchAllRole, deleteRole, fetchRolesByGroup, assignRoleToGroup };
