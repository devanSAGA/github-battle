import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>GitHub Battle</h1>
      <Link to="/battle" className="button">
        Lets Battle
      </Link>
    </div>
  );
};

export default Home;
