import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    firstName: "Mohamed",
    lastName: "ELMHASSANi",
    phone: "+212545787845",
    email: "med@live.fr",
    favorites: ["carrot", "apple", "broccoli", "seasoned rice"],
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
