import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Lock.css";

function Lock() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === "01-08") {
      navigate("/wish");
    } else {
      setError("❌ Wrong Passcode! Try again..");
    }
  };

  return (
    <div className="lock-page">
      <div className="lock-container">
        <h1>🔒 Unlock </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter Secret Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Unlock</button>
        </form>
      </div>
    </div>
  );
}

export default Lock;
