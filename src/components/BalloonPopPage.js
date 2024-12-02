import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BalloonPopPage.css";

function BalloonPopPage() {
  const [balloons, setBalloons] = useState(["🎈", "🎈", "🎈", "🎈", "🎈"]);
  const navigate = useNavigate();

  const popBalloon = (index) => {
    const newBalloons = [...balloons];
    newBalloons.splice(index, 1);
    setBalloons(newBalloons);
  };

  return (
    <div className="hero is-fullheight warm-background">
      <div className="hero-head">
        <div className="container has-text-centered">
          <h2 className="title mt-6 px-5 is-1 is-size-2-mobile warm-text is-flex is-justify-content-space-between is-align-items-center">
            <span>🎈</span> Pop the Balloons <span>🎈</span>
          </h2>
        </div>
      </div>
      <div className="hero-body is-align-items-flex-start mt-6">
        <div className="container has-text-centered">
          <div className="columns is-multiline is-centered">
            {balloons.map((balloon, index) => (
              <div
                key={index}
                className="column is-narrow"
                onClick={() => popBalloon(index)}
              >
                <span className="tag is-large is-size-4-mobile warm-text balloon">
                  {balloon}
                </span>
              </div>
            ))}
          </div>
          {balloons.length === 0 && (
            <button
              className="button is-primary is-large warm-button"
              onClick={() => navigate("/present")}
            >
              See Your Present
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BalloonPopPage;
