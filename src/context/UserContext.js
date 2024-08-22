import React, { useState } from "react";

const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: "",
    account: {},
  });

  const loginContext = (userData) => {
    console.log("Before setUser:", user);
  console.log("New userData:", userData);
  setUser(userData);
  console.log("After setUser:", user);
  };

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };
  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
