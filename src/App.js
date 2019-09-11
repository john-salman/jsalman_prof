import React, { Component } from 'react';

import './App.css';

import TopBar from './Pieces_V2/TopBar';
import ProjectCard from './Pieces_V2/ProjectCard';
import GalleryCards from "./Pieces/GalleryCards";
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';

const real = require('./Photos/Real.PNG');
const euclid = require('./Photos/Euclid.png');
const thisWeb = require('./Photos/This.PNG');
const cpu = require('./Photos/CPU.png');
const leg = require('./Photos/LEGv8.PNG');
const advisor = require('./Photos/Advisor.PNG');
const toDo = require('./Photos/to-do.PNG');
const worm = require('./Photos/worm.PNG');
const object = require('./Photos/object.PNG');

const NUM_PROJECTS = 5;

class App extends Component {
    titles = ["Real Class", "Advising Application", "LEGv8 Interpreter", "Algorithm Analysis", "CPU Benchmarking", "Website Source Code", "To-Do Page", "Worm Project", "Object Class"];

    images = [real, advisor, leg, euclid, cpu, thisWeb, toDo, worm, object];

    assoc_text = ["An implementation of a more accurate C++ double class, works accurately on large floating-point numbers without error.",
        "A front-end I designed for an Advising application, built off a sql server and updates data in real time (server not spinning).",
        "An application for interpreting LEGv8 assembly programs, modeled after classic debugging programs like GDB.",
        "A formal analysis of multiple algorithms in terms of both time and operational complexity.",
        "An analysis of CPU efficiency under decreasing power limits.",
        "The code for this website. Made from scratch using React, deployed with Netlify.",
        "A page that I used to further practice jQuery in conjunction in CSS.",
        "Final project for my Programming III, intended to test our ability to write order-efficient applications.",
        "A transpiler application I completed with a team for my Senior-Language Design Course."
    ];

    assoc_link = ['https://github.com/john-salman/Real-Class',
        "https://github.com/john-salman/Advisor_UI",
        "https://github.com/john-salman/LEGv8",
        "https://github.com/john-salman/Algorithm_Analysis_P1",
        "https://github.com/cs385/power_limit",
        "https://github.com/john-salman/jsalman_prof",
        "https://github.com/john-salman/ToDo_List",
        "https://github.com/john-salman/cs315_project_5",
        "https://github.com/joemissamore/cs460p3/blob/master/Object.cpp"
    ];

    constructor(props) {
        super(props);

        this.state = {
            title: this.titles[0],
            image: this.images[0],
            text: this.assoc_text[0],
            link: this.assoc_link[0],
            index: 0,
            user_control: false,
            rightHover: false,
            leftHover: false,
        };
    }
/*
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
            if (new_index > NUM_PROJECTS) {
                new_index = 0;
            }
            let new_title = this.titles[new_index];
            let new_image = this.images[new_index];
            let new_text = this.assoc_text[new_index];
            let new_link = this.assoc_link[new_index];

            this.setState({
                title: new_title,
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
        console.log(left_index);
        if (left_index < 0) {
            left_index = NUM_PROJECTS;
        }

        let new_title = this.titles[left_index];
        let new_image = this.images[left_index];
        let new_text = this.assoc_text[left_index];
        let new_link= this.assoc_link[left_index];

        this.setState({
            title: new_title,
            image: new_image,
            text: new_text,
            link: new_link,
            index: left_index,
            user_control: true,
        })
    }

    goRight() {
        let right_index = this.state.index + 1;
        if (right_index > NUM_PROJECTS) {
            right_index = 0;
        }

        let new_title = this.titles[right_index];
        let new_image = this.images[right_index];
        let new_text = this.assoc_text[right_index];
        let new_link= this.assoc_link[right_index];

        this.setState({
            title: new_title,
            image: new_image,
            text: new_text,
            link: new_link,
            index: right_index,
            user_control: true,
        })
    }

*/
  render() {

        let titles = this.titles;
        return (
            <div className="full-wrap">
                    <div className="row">
                        <div className="col-lg-12 col-md-4 col-xs-12">
                            <TopBar />
                        </div>
                        <div className="col-lg-12 col-md-8 col-xs-12 portfolio-wrap">
                            <div className="container">
                                <div className="row">
                                    {
                                        titles.map((title, index) =>
                                            <div className="col-lg-4 project-card">
                                                <ProjectCard
                                                    title={title}
                                                    image={this.images[index]}
                                                    text={this.assoc_text[index]}
                                                    link={this.assoc_link[index]}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );

  }
}

export default App;
