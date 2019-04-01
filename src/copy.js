import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const real = require('./Photos/Real.PNG');

class Me extends Component {
    render () {
        return (
            <div className="me">
                <img src={this.props.prof} alt="A photo of myself"/>
                <p className="name">John Salman</p>
                <a href="https://github.com/john-salman">Github</a>
                <p>jhnsalman@gmail.com</p>
            </div>
        );
    }
}

class Personal extends Component {

    constructor(props) {
        super (props);
        this.state = {
            personalVisible: false,
            personalHover: false,
        }
    }

    personalClick() {
        this.setState({
            personalVisible: (!this.state.personalVisible)
        })
    }

    personalHover(current) {
        this.setState({
            personalHover: current,
        })
    }

    render () {
        return (
            <div className={"personal-container"} onClick={() => this.personalClick()}>
                <div className={"personal-title" + (this.state.personalHover ? "-hover" : "") +(this.state.personalVisible ? "-click": "")} onMouseEnter={() => this.personalHover(true)} onMouseLeave={() => this.personalHover(false)}>
                    <span >Personal</span>
                </div>
                <div className={"personal-text"  + (this.state.personalVisible ? "-click": "")}>
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

    constructor(props) {
        super (props);
        this.state = {
            educationVisible: false,
            educationHover: false,
        }
    }

    educationClick() {
        this.setState({
            educationVisible: (!this.state.educationVisible)
        })
    }

    educationHover(current) {
        this.setState({
            educationHover: current,
        })
    }

    render () {
        return (
            <div className={"education-container"} onClick={() => this.educationClick()}>
                <div className={"education-title" + (this.state.educationHover ? "-hover" : "") + (this.state.educationVisible ? "-click": "")} onMouseEnter={() => this.educationHover(true)} onMouseLeave={() => this.educationHover(false)}>
                    <span>Education</span>
                </div>
                <div className={"education-text"  + (this.state.educationVisible ? "-click": "")}>
            <span><p>Sonomer State
            </p></span>
                </div>
            </div>
        );
    }
}

class Tech extends Component {

    constructor(props) {
        super (props);
        this.state = {
            techVisible: false,
            techHover: false,
        }
    }

    techClick() {
        this.setState({
            techVisible: (!this.state.techVisible)
        })
    }

    techHover(current) {
        this.setState({
            techHover: current,
        })
    }

    render () {
        return (
            <div className={"tech-container"} onClick={() => this.techClick()}>
                <div className={"tech-title" + (this.state.techHover ? "-hover" : "") + (this.state.techVisible ? "-click": "")} onMouseEnter={() => this.techHover(true)} onMouseLeave={() => this.techHover(false)}>
                    <span>Tech</span>
                </div>
                <div className={"tech-text"  + (this.state.techVisible ? "-click": "")}>
            <span><p>COMPOOTER
            </p></span>
                </div>
            </div>
        );
    }
}

class Work extends Component {

    constructor(props) {
        super (props);
        this.state = {
            workVisible: false,
            workHover: false,
        }
    }

    workClick() {
        this.setState({
            workVisible: (!this.state.workVisible)
        })
    }

    workHover(current) {
        this.setState({
            workHover: current,
        })
    }

    render () {
        return (
            <div className={"work-container"} onClick={() => this.workClick()}>
                <div className={"work-title" + (this.state.workHover ? "-hover" : "") + (this.state.workVisible ? "-click": "")} onMouseEnter={() => this.workHover(true)} onMouseLeave={() => this.workHover(false)}>
                    <span>Work Experience</span>
                </div>
                <div className={"work-text"  + (this.state.workVisible ? "-click": "")}>
            <span><p>Done did working
            </p></span>
                </div>
            </div>
        );
    }
}

class About extends Component {
    render () {
        return (
            <div className="about">
                <Me/>
                <Personal/>
                <Education/>
                <Tech/>
                <Work/>
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
            index: 0
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
        let new_index = this.state.index + 1;
        let new_image = this.images[new_index];
        let new_text = this.assoc_text[new_index];
        let new_link= this.assoc_link[new_index];

        this.setState({
            image: new_image,
            text: new_text,
            link: new_link,
            index: new_index
        })

    }

    render() {

        return (
            <div className="portfolio">
                <Display link={this.state.link} image={this.state.image}/>
                <Text text={this.state.text} link={this.state.link}/>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super (props);
    }

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
