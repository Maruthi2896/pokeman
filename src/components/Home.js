import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
function Home({mode}) {
  return (
    <div className="home">
      <h1> Welcome to Pokeman task site</h1>
      <Link to="/pokeman">Click here for task view</Link>
      <h4>Task details given below :</h4>
      <iframe
        className="frame"
        style={{ filter: `invert(${mode})` }}
        title="task"
        src="https://docs.google.com/document/d/126oPXZJFKhv1S7Wq0Y9HzqLym1rCw---WcQZIBM0Ric/edit"
      ></iframe>
    </div>
  );
}

export default Home;
