import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//define express app
const app = express();

//define a temp array to use a placeholder for db
const array = [
  {title: 'database'}
];

//enhance api security
app.use(helmet());

// parse json bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// logs HTTP requests
app.use(morgan('combined'));

// define an endpoint
app.get('/', (req, res) => {
  res.send(array);
});

// starting the server
app.listen(3000, () => {
  console.log('listening on port 3000');
});


ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
