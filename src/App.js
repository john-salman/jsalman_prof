import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const real = require('./Photos/Real.PNG');
const shmeeb = require('./Photos/Shmeembus.PNG');

const NUM_PROJECTS = 6;

class Me extends Component {
  render () {
    return (
      <div className="me">
          <img className="prof-pic" src={shmeeb} alt="A photo of myself"/>
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
            <span><p>I am a graduating senior from Sonoma State. I pride myself on
                                            being well versed in a number of Computer Science disciplines.
                                            including algorithm design, language design, CPU benchmarking,
                                            full-stack development, and anything Object-Oriented.
            </p></span>
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
            <span><p>COMPOOTER
            </p></span>
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
                    <span>Work Experience</span>
                </div>
                <div className={"work-text"  + (this.props.visible ? "-click": "")}>
            <span><p>Done did working
            </p></span>
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
    images = [real, 0, 0, 0, 0, 0, 0];
    assoc_text = ["This is an implementation of a more accurate C++ double class, works accurately on large floating numbers without error", "BA3wrER", "BALL2342ER", "BALLwfadsfrER", "BALLwerweradgegER", "BALasdLER", "BALLweweER"];
    assoc_link = ["https://github.com/john-salman/Real-Class", "ysdfasdurp", "yuverrp", "yurervrep", "yuqweqwrp", "yurh5rhp", "yuasdfsadrp"];

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
      <div className="full-wrap">
        <About/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
