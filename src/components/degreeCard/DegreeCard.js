import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        <Flip left duration={2000}>
          <div className="card-img">
            <img
              style={{
                display: "block",
                margin: "0 auto",
                transform: "scale(0.9)"
              }}
              src={require(`../../assests/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div classname="body-content">
              {degree.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              {
                degree.hasNoCertificate ?
                  <div className="visit-btn" style={{ border: "0.5px solid grey", color: 'grey' }}>
                    <p className="btn" >View Certificate</p>
                  </div>
                  :
                  <a
                    href={degree.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="disabled"
                  >
                    <div
                      className="visit-btn"
                      style={{ backgroundColor: theme.headerColor }}
                    >
                      <p className="btn" style={{ color: theme.text }}>
                        View Certificate
                      </p>
                    </div>
                  </a>
              }
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
