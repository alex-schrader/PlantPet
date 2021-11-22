import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import "./Seed.css";

const Seed = (props) => {
  return (
    <div className="seed">
      <b>Seeds:</b> {props.seed}
    </div>
  );
};

export default Seed;
