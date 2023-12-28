import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { greeting } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
                <p className="subTitle experience-header-detail-text">I enjoy learning and exploring topics around
                  technology, from software engineering all the way to UI/UX design, software product management, data
                  science and artificial intelligence</p>
                {/*<CompetitiveSites logos={competitiveSites.competitiveSites} />*/}
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          <Certifications theme={this.props.theme} />
          <div className="resume-btn-div">
            <Button
              text="See My Resume"
              newTab={true}
              href={greeting.resumeLink}
              theme={theme}
            />
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
