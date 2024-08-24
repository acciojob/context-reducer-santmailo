import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        list,

        setList,
        authenticated,
        setAuthenticated,
        userInput,
        setUserInput,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
