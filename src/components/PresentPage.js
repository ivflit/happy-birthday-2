import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./PresentPage.css";

function PresentPage() {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle resizing for Confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenPresent = () => {
    setIsOpened(true);
  };

  return (
    <div className="hero is-fullheight warm-background">
      <div className="hero-head">
        <div className="container has-text-centered">
          <h2
            className="title mt-6 px-5 is-1 is-size-2-mobile warm-text is-flex is-justify-content-space-between is-align-items-center"
          >
            <span>🎉</span> Happy Birthday! <span>🎉</span>
          </h2>
        </div>
      </div>
      <div className="hero-body is-align-items-flex-start mt-6">
        <div className="container has-text-centered">
          {!isOpened ? (
            <div
              className="box is-clickable warm-box"
              onClick={handleOpenPresent}
            >
              <p className="title is-1 is-size-2-mobile warm-text">🎁</p>
              <p className="warm-text is-size-6-mobile">Click to open your present!</p>
            </div>
          ) : (
            <>
              {/* Confetti appears only when the present is opened */}
              <Confetti
                width={windowDimensions.width}
                height={windowDimensions.height}
                recycle={false}
              />
              <div className="box warm-box">
                <p className="title is-3 is-size-4-mobile warm-text">Your present is ready!</p>
                <img
                  src="present.png"
                  alt="Your Present"
                  className="present-image"
                />
                <p className="warm-text mt-5">
                  Happy Birthday Mum, I hope you have an amazing day. I love you very much. 
                  I did not have a card and felt too old to make one so I made this instead. Hope you enjoy!

                  I will email over the Voucher, just didnt fancy putting that information onto the web incase someone found it and nicked it
                </p>
              </div>
            </>
          )}
          <button
            className="button is-warning is-large warm-button mt-5"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default PresentPage;
