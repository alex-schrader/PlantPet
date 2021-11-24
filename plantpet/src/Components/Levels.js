import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./Levels.css";

//create level progress bar
const Levels = (props) => {
  return (
    <div className="level">
      <b>Level:</b> {Math.floor(props.level)}
      <ProgressBar animated variant="success" max={1} now={props.level-Math.floor(props.level)} />
    </div>
  );
};

export default Levels;
