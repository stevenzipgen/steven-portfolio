import React from "react";
import "./stars.scss";
import Typed from "react-typed";

// const styles = {
//   viewMyWorkButton: {
//     background: '#ff0000'
//   }
// }

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello!! I am Steven Avendaño</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Software Engineer",
                      "Full Stack Developer",
                      ".Net Developer",
                      "Business Analyst"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="button button-a button-big button-rouded"
                  href="#work"
                  role="button"
                >
                  View My Work!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
