import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [error, setError] = useState();

  const enteredName = useRef();
  const enteredAge = useRef();

  const AddUserHandler = (event) => {
    event.preventDefault();

    const enteredUserName = enteredName.current.value;
    const enteredUserAge = enteredAge.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    enteredName.current.value = "";
    enteredAge.current.value = "";

    props.onAddUser(enteredUserName, enteredUserAge);
  };

  const errorHander = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHander}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="userName">Username</label>
          <input id="username" type="text" ref={enteredName} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
