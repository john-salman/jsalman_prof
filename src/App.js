import React, { Component } from 'react';

import './App.css';

//import SideBar from './Pieces/SideBar';
// import TopBar from './Pieces_V2/TopBar';
import ProjectCard from './Pieces_V2/ProjectCard';
//import GalleryCards from "./Pieces/GalleryCards";
//import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
//import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';
//import HangMan from './Pieces/HangMan_BR/components/HangMan';

import LandingMain from './Pieces_V3/Landing';
import Background from './Pieces_V3/Background';
import Footer from './Pieces_V3/Footer';

/*
* File: App.js
* Description: This is the primary parent component, handles the majority of layout and renders
*              contentful child components.
* Local File Dependencies: App.css for styling, { TopBar, ProjectCard } for rendering content,
*                          {real, euclid, thisWeb, cpu, leg, advisor, to-do(misnamed bc webstorm is weird), worm, object} are images
* To Do: lift state up from ProjectCard.js
* */

const UofMLogo = require('./Photos/UofMlogo.png');
const real = require('./Photos/Real.PNG');
const euclid = require('./Photos/Euclid.png');
const thisWeb = require('./Photos/This.PNG');
const cpu = require('./Photos/CPU.png');
const leg = require('./Photos/LEGv8.PNG');
const advisor = require('./Photos/Advisor.PNG');
const object = require('./Photos/object.PNG');

const github = require('./Photos/GitHub.svg');
const linkedin = require('./Photos/LinkedIn.svg');
const resume = require('./Pieces/JS_Resume.pdf');
const headshot = require('./Photos/Headshot.png');


class App extends Component {
    titles = ["University of Maine", "Object Class", "LEGv8 Interpreter", "Algorithm Analysis", "CPU Benchmarking", "Website Source Code", "Advising Application"  ];

    images = [UofMLogo, real,  object, leg, euclid, cpu, thisWeb, advisor];

    assoc_text = [
        "A revamp of the University of Maine Chemistry Department Site's landing page I developed.",
        "An implementation of a more accurate C++ double class, works accurately on large floating-point numbers without error.",
        "A transpiler application I completed with a team for my Senior-Language Design Course.",
        "An application for interpreting LEGv8 assembly programs, modeled after classic debugging programs like GDB.",
        "A formal analysis of multiple algorithms in terms of both time and operational complexity.",
        "An analysis of CPU efficiency under decreasing power limits.",
        "The code for this website. Made with React, deployed with Netlify.",
        "A front-end I designed for an Advising application, built off a sql server and updates data in real time (server not spinning)."
    ];

    assoc_link = [
        "https://interchemnet.com/newnav/NewNavigator/LoginForm.cfm",
        "https://github.com/john-salman/Real-Class",
        "https://github.com/joemissamore/cs460p3/blob/master/Object.cpp",
        "https://github.com/john-salman/LEGv8",
        "https://github.com/john-salman/Algorithm_Analysis_P1",
        "https://github.com/cs385/power_limit",
        "https://github.com/john-salman/jsalman_prof",
        "https://github.com/john-salman/Advisor_UI"
    ];

    about = "I'm a software engineer with experience planning, designing, and developing enterprise web applications. I take pride in finding efficient solutions to complex issues and building expertise in a variety of subjects within Software Engineering.";


    constructor(props) {
        super(props);

        this.state = {
            //currentCard: "",
            expanded: '',
        };

        //this.cardHoverChange = this.cardHoverChange.bind(this);
        this.topBarChange = this.topBarChange.bind(this);
    }
    /*
    cardHoverChange = (_card_id) => {
        let new_currentCard = _card_id;
        this.setState( {
            currentCard: new_currentCard,
        });
    };
    */
    topBarChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };




  render() {



        const titles = this.titles;
        return (
            <div>
                <Background />
                <LandingMain
                    propAbout={this.about}
                    github={github}
                    linkedin={linkedin}
                    resume={resume}
                />
                <div id="carousel-self-link" className="carousel slide carousel-custom-style" data-ride="carousel">
                  <ol className="carousel-indicators">
                     {
                            titles.map((title, index) =>
                                <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index == 0 ? "active" : ""}></li>
                            )
                        }
                  </ol>
                  <div class="carousel-inner">
                   {
                            titles.map((title, index) =>
                                <div className={index == 0 ? "carousel-item active" : "carousel-item"} data-interval="5000">
                                       <ProjectCard
                                        title={title}
                                        image={this.images[index]}
                                        text={this.assoc_text[index]}
                                        link={this.assoc_link[index]}
                                        /*cardHoverChange={this.cardHoverChange}
                                        card_id={index}
                                        isCurrent={index === this.state.currentCard ? "-hover" : ""}*/
                                    />
                                </div>
                            )
                    }
                  </div>
                  <a class="carousel-control-prev" href="#carousel-self-link" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carousel-self-link" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <Footer
                    github={github}
                    linkedin={linkedin}
                    resume={resume}
                />

            </div>

        );

  }
}

export default App;
