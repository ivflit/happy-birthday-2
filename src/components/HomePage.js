import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="hero is-fullheight warm-background">
      <div className="hero-head">
        <div className="container has-text-centered">
          <h1 className="title mt-6 px-5 is-1 is-size-2-mobile warm-text is-flex is-justify-content-space-between is-align-items-center">
            <span>🎉</span> Happy Birthday Mum! <span>🎉</span>
          </h1>
        </div>
      </div>
      <div className="hero-body is-align-items-flex-start mt-6">
        <div className="container has-text-centered">
          <div className="box warm-box">
            <h2 className="subtitle is-3 is-size-4-mobile warm-text">Wishing You the best day ever!</h2>
            
            <button
              className="button is-primary is-large warm-button"
              onClick={() => navigate("/balloon-pop")}
            >
              Pop the Balloons!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
