import React, { Component } from 'react';

import './App.css';

//import SideBar from './Pieces/SideBar';
import TopBar from './Pieces_V2/TopBar';
import ProjectCard from './Pieces_V2/ProjectCard';
//import GalleryCards from "./Pieces/GalleryCards";
//import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
//import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';
//import HangMan from './Pieces/HangMan_BR/components/HangMan';

/*
* File: App.js
* Description: This is the primary parent component, handles the majority of layout and renders
*              contentful child components.
* Local File Dependencies: App.css for styling, { TopBar, ProjectCard } for rendering content,
*                          {real, euclid, thisWeb, cpu, leg, advisor, to-do(misnamed bc webstorm is weird), worm, object} are images
* To Do: lift state up from ProjectCard.js
* */


const real = require('./Photos/Real.PNG');
const euclid = require('./Photos/Euclid.png');
const thisWeb = require('./Photos/This.PNG');
const cpu = require('./Photos/CPU.png');
const leg = require('./Photos/LEGv8.PNG');
const advisor = require('./Photos/Advisor.PNG');
const toDo = require('./Photos/to-do.PNG');
const worm = require('./Photos/worm.PNG');
const object = require('./Photos/object.PNG');

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
            currentCard: "",
            expanded: '',
        };

        this.cardHoverChange = this.cardHoverChange.bind(this);
        this.topBarChange = this.topBarChange.bind(this);
    }

    cardHoverChange = (_card_id) => {
        let new_currentCard = _card_id;
        this.setState( {
            currentCard: new_currentCard,
        });
    };

    topBarChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

  render() {

        const titles = this.titles;
        return (
            <div className="full-wrap">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12" id="top-bar-wrap">
                            <TopBar
                                expanded={this.state.expanded}
                                topBarChange={this.topBarChange}
                            />
                        </div>
                        <div className="col-lg-12 col-xs-12 portfolio-wrap">
                            <div className="container">
                                <div className="row">
                                    {
                                        titles.map((title, index) =>
                                            <div className="col-lg-4 project-card" >
                                                <ProjectCard
                                                    title={title}
                                                    image={this.images[index]}
                                                    text={this.assoc_text[index]}
                                                    link={this.assoc_link[index]}
                                                    cardHoverChange={this.cardHoverChange}
                                                    card_id={index}
                                                    isCurrent={index === this.state.currentCard ? "-hover" : ""}
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
