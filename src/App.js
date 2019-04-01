import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './App.css';

const real = require('./Photos/Real.PNG');
const euclid = require('./Photos/Euclid.png');
const shmeeb = require('./Photos/Shmeembus.PNG');
const headshot = require('./Photos/Headshot.png');
const masterMind = require('./Photos/MasterMind.PNG');
const thisWeb = require('./Photos/This.PNG');
const cpu = require('./Photos/CPU.png');

const NUM_PROJECTS = 6;

class Me extends Component {
  render () {
    return (
      <div className="me">
          <img className="prof-pic" src={headshot} alt="A photo of myself"/>
          <p className="name">John Salman</p>
          <p>jhnsalman@gmail.com</p>
          <a href="https://github.com/john-salman">Github</a>
      </div>
    );
  }
}

class Personal extends Component {

  render () {
    return (
        <div className={"personal-container"} onClick={() => this.props.personalClick()}>
          <div className={"personal-title" + (this.props.hover ? "-hover" : "") +(this.props.visible ? "-click": "")} onMouseEnter={() => this.props.personalHover(true)} onMouseLeave={() => this.props.personalHover(false)}>
            <span >About Me</span>
          </div>
          <div className={"personal-text"  + (this.props.visible ? "-click": "")}>
            <span><p>There is nothing better than learning new technology, writing quality code, and first time compiles. I am a
                     a graduating senior from the Computer Science Department at Sonoma State. I'm hungry for the oppurtunity to
                     begin my professional career, where I can spend my days contributing to projects bigger than myself. Software is
                     has given so much to this world already, and I'm looking to make my mark.
            </p>
                  <p>In school, I have always gone above and beyond to gain the most in depth understanding of all domains of computer science.
                    I take pride in being a jack-of-all-trades, and enjoy throwing myself into the deep end. Building large scale applications
                    will always put a smile on my face, but I get just as much out of building websites or digging around beneath operating systems.
                  </p>
                <p>Rock climbing is my next greatest passion. It is hard to beat the feeling of topping out on a multi-week project route, but anytime
                   I can get my blood pumping and sweat running is a good time to me. I look for any chance to get outside, be it trail-running,
                    disk-golf, fishing, gardening, camping, and anything that helps me finish the day dirt-covered and tired.
                </p>
            </span>
          </div>
        </div>
    );
  }
}

class Education extends Component {

    render () {
        return (
            <div className={"education-container"} onClick={() => this.props.educationClick()}>
                <div className={"education-title" + (this.props.hover ? "-hover" : "") + (this.props.visible ? "-click": "")} onMouseEnter={() => this.props.educationHover(true)} onMouseLeave={() => this.props.educationHover(false)}>
                    <span>Education</span>
                </div>
                <div className={"education-text"  + (this.props.visible ? "-click": "")}>
            <span><p><strong>Sonoma State University</strong>, Rohnert Park</p>
                  <p><em>Bachelor of Science</em>, Computer Science</p>
                  <p>Expected Graduation Date: May 2019</p>
                  <p>GPA: 3.49</p></span>
                </div>
            </div>
        );
    }
}

class Tech extends Component {

    render () {
        return (
            <div className={"tech-container"} onClick={() => this.props.techClick()}>
                <div className={"tech-title" + (this.props.hover ? "-hover" : "") + (this.props.visible ? "-click": "")} onMouseEnter={() => this.props.techHover(true)} onMouseLeave={() => this.props.techHover(false)}>
                    <span>Tech</span>
                </div>
                <div className={"tech-text"  + (this.props.visible ? "-click": "")}>
            <span><p><strong>Proficient Languages :</strong> C++, Python, Javascript (+ NodeJS), HTML, CSS, C, SQL</p>
                  <p><strong>Familiar Languages :</strong> Bash, Scheme, LaTeX</p>
                  <p><strong>Database :</strong> MySQL, MariaDB, AWSCloud, Firebase</p>
                  <p><strong>Framework :</strong> MVC, React(Native), Amazon Alexa</p>
                  <p><strong>Misc. :</strong> Unix Command Line, CPU Analysis, Algorithm Analysis, Language Design</p>
            </span>
                </div>
            </div>
        );
    }
}

class Work extends Component {

    render () {
        return (
            <div className={"work-container"} onClick={() => this.props.workClick()}>
                <div className={"work-title" + (this.props.hover ? "-hover" : "") + (this.props.visible ? "-click": "")} onMouseEnter={() => this.props.workHover(true)} onMouseLeave={() => this.props.workHover(false)}>
                    <span>Volunteering</span>
                </div>
                <div className={"work-text"  + (this.props.visible ? "-click": "")}>
            <span><p><strong>NomaHacks 2019 Organizer</strong></p>
                    <p>I maintained the website, adding new assets, and updating old. I visited classrooms to spread the word, and increase attendance.
                        I also volunteered for the whole event, staying overnight to help the event run smoothly.</p>
                    <br/>
                    <p><strong>Red Cross Shelter Volunteer</strong></p>
                    <p>While my school was evacuated during the Tubbs Fire, I volunteered at the main Red Cross evacuation shelter at the Sonoma State Fairgrounds.
                        I was placed in charge of the inflow and outflow of the main donation area, ensuring that donations were taken in and distributed to neighboring
                        shelters efficiently. I volunteered for 10 days, and coordinated with county officials and other volunteer agencies to help local shelters
                        obtain critical supplies.</p>
            </span>
                </div>
            </div>
        );
    }
}

class About extends Component {
    constructor(props) {
       super(props);

       this.state ={
           personalVisible: false,
           personalHover: false,
           educationVisible: false,
           educationHover: false,
           techVisible: false,
           techHover: false,
           workVisible: false,
           workHover: false,
       };

        this.personalClick = this.personalClick.bind(this);
        this.personalHover = this.personalHover.bind(this);
        this.educationClick = this.educationClick.bind(this);
        this.educationHover = this.educationHover.bind(this);
        this.techClick = this.techClick.bind(this);
        this.techHover = this.techHover.bind(this);
        this.workClick = this.workClick.bind(this);
        this.workHover = this.workHover.bind(this);

    }
    personalClick() {
        this.setState({
            personalVisible: (!this.state.personalVisible),
            educationVisible: false,
            techVisible: false,
            workVisible: false,
        })
    }

    personalHover(current) {
        this.setState({
            personalHover: current,
        })
    }

    educationClick() {
        this.setState({
            personalVisible: false,
            educationVisible: (!this.state.educationVisible),
            techVisible: false,
            workVisible: false,

        })
    }

    educationHover(current) {
        this.setState({
            educationHover: current,
        })
    }

    techClick() {
        this.setState({
            personalVisible: false,
            educationVisible: false,
            techVisible: (!this.state.techVisible),
            workVisible: false,
        })
    }

    techHover(current) {
        this.setState({
            techHover: current,
        })
    }

    workClick() {
        this.setState({
            personalVisible: false,
            educationVisible: false,
            techVisible: false,
            workVisible: (!this.state.workVisible),
        })
    }

    workHover(current) {
        this.setState({
            workHover: current,
        })
    }

    render () {
    return (
              <div className="about">
                <Me/>
                <Personal
                      hover={this.state.personalHover}
                      visible={this.state.personalVisible}
                      personalClick={this.personalClick}
                      personalHover={this.personalHover}/>
                <Education
                      hover={this.state.educationHover}
                      visible={this.state.educationVisible}
                      educationClick={this.educationClick}
                      educationHover={this.educationHover}/>
                <Tech
                      hover={this.state.techHover}
                      visible={this.state.techVisible}
                      techClick={this.techClick}
                      techHover={this.techHover}/>
                <Work
                      hover={this.state.workHover}
                      visible={this.state.workVisible}
                      workClick={this.workClick}
                      workHover={this.workHover}/>
              </div>
    );
  }
}

class Display extends Component {
    render() {
        return (
            <div className="image-wrap">
                <a href={this.props.link}><img className="image" src={this.props.image} alt="image/link to repository"/></a>
            </div>
        );
    }
}

class Text extends Component {
    render() {
        return (
            <div className="text-wrap">
                <p>{this.props.text}</p>
                <a href={this.props.link}><p>Link to code</p></a>
            </div>
        );
    }
}

class Portfolio extends Component {
    images = [real, euclid, masterMind, cpu, thisWeb, 0, 0, 0];
    assoc_text = ["An implementation of a more accurate C++ double class, works accurately on large floating numbers without error.",
                  "A formal analysis of multiple algorithms in terms of both time and operational complexity.",
                  "A replication of the classic Master Mind game, made in React",
                  "An analysis of CPU efficiency under decreasing power limits.",
                  "The code for this website, made from scratch using React",];
    assoc_link = ["https://github.com/john-salman/Real-Class",
                  "https://github.com/john-salman/Algorithm_Analysis_P1",
                  "https://github.com/john-salman/masterMind",
                  "https://github.com/cs385/power_limit",
                  "https://github.com/john-salman/jsalman_prof",];

    constructor(props) {
        super(props);

        this.state = {
            image: this.images[0],
            text: this.assoc_text[0],
            link: this.assoc_link[0],
            index: 0,
            user_control: false,
            rightHover: false,
            leftHover: false,
        }

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.new(),
            15000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    new() {
        if (!this.state.user_control) {
            let new_index = this.state.index + 1;
            if (new_index > 6) {
                new_index = 0;
            }
            let new_image = this.images[new_index];
            let new_text = this.assoc_text[new_index];
            let new_link = this.assoc_link[new_index];

            this.setState({
                image: new_image,
                text: new_text,
                link: new_link,
                index: new_index,
            })
        }
    }

    rightHover(current) {
        this.setState({
            rightHover: current,
        })
    }

    leftHover(current) {
        this.setState({
            leftHover: current,
        })
    }

    goLeft() {
        let left_index = this.state.index - 1;
        if (left_index < 0) {
            left_index = NUM_PROJECTS;
        }

        let new_image = this.images[left_index];
        let new_text = this.assoc_text[left_index];
        let new_link= this.assoc_link[left_index];

        this.setState({
            image: new_image,
            text: new_text,
            link: new_link,
            index: left_index,
            user_control: true,
        })
    }

    goRight() {
        let right_index = this.state.index + 1;
        console.log("We're trying: ", right_index);
        if (right_index > NUM_PROJECTS) {
            right_index = 0;
        }

        let new_image = this.images[right_index];
        let new_text = this.assoc_text[right_index];
        let new_link= this.assoc_link[right_index];

        this.setState({
            image: new_image,
            text: new_text,
            link: new_link,
            index: right_index,
            user_control: true,
        })
    }

    render() {

            return (
                <div className="portfolio-wrap">
                        <div className={"left-wrap" + (this.state.leftHover ? "-hover" : "")} onClick={() => this.goLeft()} onMouseEnter={() => this.leftHover(true)} onMouseLeave={() => this.leftHover(false)}>
                            <i className="left" ></i>
                        </div>
                            <div className="portfolio">
                                <Display link={this.state.link} image={this.state.image}/>
                                <Text text={this.state.text} link={this.state.link}/>
                            </div>
                        <div className={"right-wrap" + (this.state.rightHover ? "-hover" : "")} onClick={() => this.goRight()} onMouseEnter={() => this.rightHover(true)} onMouseLeave={() => this.rightHover(false)}>
                            <i className="right"></i>
                        </div>
                </div>
            );
    }
}

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="full-wrap">
            <About/>
            <div className="seperator"></div>
            <Portfolio/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
