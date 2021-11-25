import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import "./Seed.css"


const Seed = (props) => {

  return (
    <p className = "seed">
      Seeds: {props.seed}
    </p>
  );
};

export default Seed;
