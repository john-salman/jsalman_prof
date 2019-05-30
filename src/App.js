import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';

import SideBar from './Pieces/SideBar';
import GalleryCards from "./Pieces/GalleryCards";
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';


const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#4dd0e1',
        },
    },
});

const real = require('./Photos/Real.PNG');
const euclid = require('./Photos/Euclid.png');
//const masterMind = require('./Photos/MasterMind.PNG');
const thisWeb = require('./Photos/This.PNG');
const cpu = require('./Photos/CPU.png');

const NUM_PROJECTS = 3;

class App extends Component {
    images = [real, euclid, cpu, thisWeb];
    assoc_text = ["An implementation of a more accurate C++ double class, works accurately on large floating numbers without error.",
        "A formal analysis of multiple algorithms in terms of both time and operational complexity.",
        "An analysis of CPU efficiency under decreasing power limits.",
        "The code for this website, made from scratch using React",];

    assoc_link = ['https://github.com/john-salman/Real-Class',
        "https://github.com/john-salman/Algorithm_Analysis_P1",
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
            if (new_index > 4) {
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
        if (right_index > 4) {
            right_index = 0;
        }
        console.log("We're trying: ", right_index);
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
        <ThemeProvider theme={theme}>
        <div className="full-wrap">
              <Paper className="about" elevation={1}>
                <SideBar/>
              </Paper>
              <div className="portfolio-wrap">
                  <div className={"left-wrap" + (this.state.leftHover ? "-hover" : "")} onClick={() => this.goLeft()} onMouseEnter={() => this.leftHover(true)} onMouseLeave={() => this.leftHover(false)}>
                      <ArrowLeftRounded />
                  </div>
                  <GalleryCards image={this.state.image} link={this.state.link} text={this.state.text}/>
                  <div className={"right-wrap" + (this.state.rightHover ? "-hover" : "")} onClick={() => this.goRight()} onMouseEnter={() => this.rightHover(true)} onMouseLeave={() => this.rightHover(false)}>
                      <ArrowRightRounded/>
                  </div>
              </div>
          </div>
        </ThemeProvider>

    );
  }
}

export default App;
