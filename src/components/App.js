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
        value={userInput}
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
          setUserInput("");
        }}
      >
        Add Task
      </button>
      <button
        onClick={() => {
          setList([]);
          setUserInput("");
        }}
        id="clear-list"
      >
        Clear List
      </button>

      <br />
      <br />
      <ul className="list-ul">
        <li id="#item-mango">mango</li>
        {list.map((item) => {
          console.log(item);
          return (
            <li
              id={item.idItem}
              key={Math.random() * 100 + 1 + list.length}
            >{`${item.item}`}</li>
            // <button
            //   id={item.removeItem}
            //   onClick={() => {
            //     const newArr = list.filter((fItem) => {
            //       return item.idItem != fItem.idItem;
            //     });
            //     setList(newArr);
            //   }}
            // >
            //   X
            // </button>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
