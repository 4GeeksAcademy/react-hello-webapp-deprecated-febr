//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client";

//include your index.scss file into the bundle
import "../styles/index.css";
import "../img/1.jpg";
import "../img/2.jpg";
import "../img/3.jpg";
import "../img/4.jpg";
import "../img/5.jpg";
import "../img/6.jpg";
import "../img/7.jpg";
import "../img/8.jpg";
import "../img/9.jpg";
import "../img/10.jpg";
import "../img/11.jpg";
import "../img/12.jpg";
import "../img/13.jpg";
import "../img/14.jpg";
import "../img/15.jpg";
import "../img/16.jpg";
import "../img/17.jpg";
import "../img/18.jpg";
import "../img/19.jpg";
import "../img/20.jpg";

//import your own components
import Layout from "./layout.js";

//
const root = createRoot(document.querySelector("#app"));

//render your react application
root.render(<Layout />);
