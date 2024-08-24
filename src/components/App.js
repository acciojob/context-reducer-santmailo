import React, { useContext } from "react";
import { UserContext } from "../index";

const App = () => {
  const oj = useContext(UserContext);
  const {
    name,
    setName,
    list,
    setList,
    authenticated,
    setAuthenticated,
    userInput,
    setUserInput,
  } = useContext(UserContext);

  return (
    <div>
      <h1 id="current-user">{`Current user:${name}, isAuthenticated: ${
        authenticated ? "Yes" : "No"
      }`}</h1>
      <button
        onClick={() => {
          setName("Ted");
          setAuthenticated(true);
        }}
        id="login-btn"
      >
        Login
      </button>
      <button
        id="signout"
        onClick={() => {
          setName("");
          setAuthenticated(false);
        }}
      >
        Signout
      </button>
      <br />
      <br />
      <input
        type="text"
        id="shopping-input"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setList([
            ...list,
            {
              item: userInput,
              idItem: `item-${userInput}`,
              removeItem: `remove-${userInput}`,
            },
          ]);
        }}
      >
        Add Task
      </button>
      <button
        onClick={() => {
          setList([]);
        }}
        id="clear-list"
      >
        Clear List
      </button>

      <br />
      <br />

      <ul>
        <li id={"item-mango"}>
          mango
          <button id={"remove-mango"}> X</button>
        </li>
        {list.map((item) => {
          return (
            <li id={item.idItem}>
              {item.item + "  "}
              <button
                id={item.removeItem}
                onClick={() => {
                  console.log(list);
                  const newArr = list.filter((fItem) => {
                    return item.idItem != fItem.idItem;
                  });
                  setList(newArr);
                }}
              >
                {" "}
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
