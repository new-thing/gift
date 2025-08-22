

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wish.css";

function Wish() {
  const [showSecret, setShowSecret] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="wish-page">
      {/* Floating hearts */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="heart"></div>
      ))}

      {/* Main Content */}
      <div className="wish-box">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem magni harum quaerat labore porro veniam.
        </p>

        <button className="secret-btn" onClick={() => setShowSecret(!showSecret)}>
        click here
        </button>

        {showSecret && (
          <div className="secret-msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolore!
            <button
              className="secret-btn-next"
              onClick={() => navigate("/msg")} 
            >
              Click
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wish;

