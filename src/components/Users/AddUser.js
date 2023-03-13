import React, { useState } from "react";

import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlForm="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlForm="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
  );
};

export default AddUser;
