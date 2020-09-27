import React from "react";
import net from "../img/net.svg";
import react from "../img/react.svg";
import angular from "../img/angular.svg";
import api from "../img/api.svg";
import cplus from "../img/cplus.svg";
import csharp from "../img/csharp.svg";
import java from "../img/java.svg";
import jquery from "../img/jquery.svg";
import mysql from "../img/mysql.svg";
import nodejs from "../img/nodejs.svg";
import php from "../img/php.svg";
import sql from "../img/sql.svg";
import aws from "../img/aws.svg";
import azure from "../img/azure.svg";
import github from "../img/github.svg";
import javascript from "../img/javascript.svg";
import oracle from "../img/oracle.svg";
import wordpress from "../img/wordpress.svg";
import android from "../img/android.svg";
import html from "../img/html.svg";
import python from "../img/python.svg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "100%", value: "0" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a software engineer with over 6 years of experience providing solutions for health, insurance and telecommunications industries."
        },
        {
          id: "second-p-about",
          content:
            "I love exchange knowledge, help people, make a social impact and contribute to the evolution of the world."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <React.Fragment>
                            <h4 key={content.id}>
                              {content.content}
                            </h4>
                            <br/>
                            <br/>
                            </React.Fragment>
                        );
                      })}
                      <br/>
                      <br/>
                          </div>
                  </div>
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">My Shelf</h5>
                      </div>
                      <div className="skill-mf">
                        {/* <p className="title-s">Skill</p> */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          &nbsp;&nbsp;&nbsp;
                      <img
                            src={net}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                            &nbsp;&nbsp;&nbsp;
                            <img
                            src={react}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={api}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                            &nbsp;&nbsp;&nbsp;
                            <img
                            src={csharp}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={cplus}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            //aria-valuenow={skill.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          &nbsp;&nbsp;&nbsp;
                      <img
                            src={sql}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                            &nbsp;&nbsp;&nbsp;
                            <img
                            src={mysql}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={oracle}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                            &nbsp;&nbsp;&nbsp;
                            <img
                            src={php}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={javascript}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            //aria-valuenow={skill.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          &nbsp;&nbsp;&nbsp;
                            <img
                            src={azure}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={aws}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={android}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                            &nbsp;&nbsp;&nbsp;
                            <img
                            src={github}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                            <img
                            src={wordpress}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            //aria-valuenow={skill.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          &nbsp;&nbsp;&nbsp;
                      <img
                            src={html}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={java}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={angular}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                            &nbsp;&nbsp;&nbsp;
                            <img
                            src={jquery}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                      &nbsp;&nbsp;&nbsp;
                      <img
                            src={python}
                            alt="logo"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            //aria-valuenow={skill.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default About;
