

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
        <h1>Happy 4 Years Together ❤️</h1>
        <p>
          Four years, countless memories,endless laughter, 
          and a love that only grows....  
          You are my today and all of my tomorrows 💕
        </p>

        <button className="secret-btn" onClick={() => setShowSecret(!showSecret)}>
          💌 Secret Msg
        </button>

        {showSecret && (
          <div className="secret-msg">
            My heart beats only for you, and forever will.
            <button
              className="secret-btn-next"
              onClick={() => navigate("/msg")} 
            >
              💌 Click
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wish;

