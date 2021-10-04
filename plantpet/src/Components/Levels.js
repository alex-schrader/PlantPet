import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Levels = (props) => {


  return (
    <div className="level">
      Level: <h1>{props.level}</h1>
      <ProgressBar animated variant="success" now={props.level} />
    </div>
  );
};

export default Levels;
