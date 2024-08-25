import React, { useEffect, useState } from "react";
import "./GroupRole.scss";
import { fetchGroup } from "../../services/userService";
import { toast } from "react-toastify";
import {
  fetchAllRole,
  fetchRolesByGroup,
  assignRoleToGroup,
} from "../../services/roleService";
import _ from "lodash";

function GroupRole(props) {
  const [userGroups, setUserGroups] = useState([]);
  const [selectGroup, setSelectGroup] = useState("");
  const [listRoles, setListRoles] = useState("");
  const [assignRoleByGroup, setAssignRoleByGroup] = useState([]);

  useEffect(() => {
    getGroups();
    getAllRoles();
  }, []);

  const getGroups = async () => {
    let res = await fetchGroup();
    if (res && res.EC === 0) {
      setUserGroups(res.DT);
    } else {
      toast.error(res.EM);
    }
  };

  const getAllRoles = async () => {
    let data = await fetchAllRole();
    if (data && +data.EC === 0) {
      setListRoles(data.DT);
    }
  };

  const handleOnchangeGroup = async (value) => {
    setSelectGroup(value);
    if (value) {
      let data = await fetchRolesByGroup(value);
      if (data && +data.EC === 0) {
        let result = buildDataRolesByGroup(data.DT.Roles, listRoles);
        setAssignRoleByGroup(result);
      }
    }
  };

  const buildDataRolesByGroup = (groupRoles, allRoles) => {
    let result = [];
    if (allRoles && allRoles.length > 0) {
      allRoles.map((role) => {
        let object = {};
        object.url = role.url;
        object.id = role.id;
        object.description = role.description;
        object.isAssigned = false;
        if (groupRoles && groupRoles.length > 0) {
          object.isAssigned = groupRoles.some(
            (item) => item.url === object.url
          );
        }
        result.push(object);
      });
    }
    return result;
  };

  const handleSelectRole = (value) => {
    const _assignRoleByGroup = _.cloneDeep(assignRoleByGroup);
    let foundIndex = _assignRoleByGroup.findIndex(
      (item) => +item.id === +value
    );
    if (foundIndex > -1) {
      _assignRoleByGroup[foundIndex].isAssigned =
        !_assignRoleByGroup[foundIndex].isAssigned;
    }
    setAssignRoleByGroup(_assignRoleByGroup);
  };

  const buildDataToSave = () => {
    let result = {};
    const _assignRoleByGroup = _.cloneDeep(assignRoleByGroup);
    result.groupId = selectGroup;
    let groupRoles = _assignRoleByGroup.filter(
      (item) => item.isAssigned === true
    );
    let finalGroupRoles = groupRoles.map((item) => {
      let data = { groupId: +selectGroup, roleId: +item.id };
      return data;
    });
    result.groupRoles = finalGroupRoles;
    return result;
  };

  const handleSave = async () => {
    let data = buildDataToSave();
    let res = await assignRoleToGroup(data);
    if (res && res.EC === 0) {
      toast.success(res.EM);
    }
  };

  return (
    <div className="group-role-container">
      <div className="container">
        <div className="container mt-3">
          <h4>Group Role:</h4>
          <div className="assign-group-role">
            <div className="col-12 col-sm-6 form-group">
              <label>
                select Group: (<span className="red">*</span>) :
              </label>
              <select
                className="form-select"
                onChange={(event) => handleOnchangeGroup(event.target.value)}
              >
                <option value="">Please select your group</option>
                {userGroups.length > 0 &&
                  userGroups.map((item, index) => {
                    return (
                      <option key={`group-${index}`} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <hr />
            {selectGroup && (
              <div className="roles">
                <div>
                  <h4>Assign Roles:</h4>
                </div>
                {assignRoleByGroup &&
                  assignRoleByGroup.length > 0 &&
                  assignRoleByGroup.map((item, index) => {
                    return (
                      <div className="form-check" key={`list-role-${index}`}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item.id}
                          checked={item.isAssigned}
                          id={`list-role-${index}`}
                          onChange={(event) =>
                            handleSelectRole(event.target.value)
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`list-role-${index}`}
                        >
                          {item.url}
                        </label>
                      </div>
                    );
                  })}
              </div>
            )}
            <div className="mt-3">
              <button className="btn btn-warning" onClick={() => handleSave()}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupRole;
