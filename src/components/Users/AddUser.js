import React from "react";

import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlForm="username">Username</label>
        <input id="username" type="text" />
        <label htmlForm="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
  );
};

export default AddUser;
