import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [usersList, setUsersList] = useState([
    {
      name: "Admin Duong",
      age: 22,
      id: 1,
    },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
