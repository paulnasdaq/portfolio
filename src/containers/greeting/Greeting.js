import React, { Component } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default class Greeting extends Component{
  constructor(props) {
    super(props);
    this.theme = props.theme;

    this.state = {
      generatedQuote: {}
    }
    this.generateRandomQuote();
  }
  generateRandomQuote(){
    fetch('random-quote').then(res=>res.json()).then(data => {
      this.setState({
        generatedQuote: data
      })
    })
  }
  getGreeting() {
    const now = new Date();
    if (now.getHours() < 12){
      return 'Hi, good morning';
    }
    else if(now.getHours() >= 12 && now.getHours() < 19){
      return 'Hello, good afternoon'
    }
    else {
      return 'Good evening'
    }
  }

  render() {
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                {/*<h1 className="greeting-text" style={{ color: this.theme.text }}>*/}
                {/*  {greeting.title}*/}
                {/*</h1>*/}
                <div className='quote-container text-monospace'>
                  <p className='quote'>
                    "{this.state.generatedQuote.quote}"
                  </p>
                  <p className='author'>
                    ~{this.state.generatedQuote.author}~
                  </p>
                </div>
                {/*<h2 className="greeting-nickname" style={{ color: theme.text }}>*/}
                {/*  ({greeting.nickname})*/}
                {/*</h2>*/}
                <div className="resume-btn-div">
                  <Button
                    text="Reload Quote"
                    theme={this.theme}
                    click={() => this.generateRandomQuote()}
                  />
                </div>

                <p
                  className="greeting-text-p subTitle"
                  style={{ color: this.theme.secondaryText }}
                >
                  {this.getGreeting()},<br/>
                  {greeting.subTitle}
                </p>

                <SocialMedia theme={this.theme} />
                {/*<div className="portfolio-repo-btn-div">*/}
                {/*  <Button*/}
                {/*    text="⭐ Star Me On Github"*/}
                {/*    newTab={true}*/}
                {/*    href={greeting.portfolio_repository}*/}
                {/*    theme={theme}*/}
                {/*    className="portfolio-repo-btn"*/}
                {/*  />*/}
                {/*</div>*/}
                {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
              </div>
            </div>
            <div className="greeting-image-div">
              <embed
                alt="saad sitting on table"
                src="illustrations/homepage/greeting-image/greeting-image.svg"
              ></embed>
              {/*<FeelingProud theme={theme} />*/}
            </div>
          </div>
        </div>
      </Fade>

    )

  }
}
function Greeting1(props) {
  const theme = props.theme;
  let quote = "";
  function generateRandomQuote(){
    fetch('http://quotes.stormconsultancy.co.uk/random.json').then(res=>res.json()).then(data => {
      quote = 'haha'
    })
  }
  function getGreeting() {
    generateRandomQuote();
    const now = new Date();
    if (now.getHours() < 12){
      return 'Hi, good morning';
    }
    else if(now.getHours() >= 12 && now.getHours() < 19){
      return 'Hello, good afternoon'
    }
    else {
      return 'Good evening'
    }
  }
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
                {quote}
              </h1>
              {/*<h2 className="greeting-nickname" style={{ color: theme.text }}>*/}
              {/*  ({greeting.nickname})*/}
              {/*</h2>*/}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {getGreeting()},<br/>
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              {/*<div className="portfolio-repo-btn-div">*/}
              {/*  <Button*/}
              {/*    text="⭐ Star Me On Github"*/}
              {/*    newTab={true}*/}
              {/*    href={greeting.portfolio_repository}*/}
              {/*    theme={theme}*/}
              {/*    className="portfolio-repo-btn"*/}
              {/*  />*/}
              {/*</div>*/}
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <embed
							alt="saad sitting on table"
							src="illustrations/homepage/greeting-image/greeting-image.svg"
						></embed>
            {/*<FeelingProud theme={theme} />*/}
          </div>
        </div>
      </div>
    </Fade>
  );
}
