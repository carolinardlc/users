import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlForm="username">Username</label>
      <input id="username" type="text" />
      <label htmlForm="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">AddUser</button>
    </form>
  );
};

export default AddUser;
