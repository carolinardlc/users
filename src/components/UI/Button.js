import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    ></Button>
  );
};

export default Button;
