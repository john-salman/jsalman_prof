import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

import './TopBar.css';

/*
* File: TopBar
* Description: This component renders the bar along the top of the screen, contains name, contact info, professional
*              profiles, resume, and some extra info about myself. Holds a horizontal layout on desktop, vertical on mobile.
* Local File Dependencies: TopBar.css for styling, {github, linkedin, resume, headshot} are additional icons
* */

const github = require('../Photos/GitHub.svg');
const linkedin = require('../Photos/LinkedIn.svg');
const resume = require('../Pieces/JS_Resume.pdf');
const headshot = require('../Photos/Headshot.png');



const Title =  withStyles({
    root: {
        color: 'white',
        textAlign: 'center',
        width: '100%',
        margin: 'auto',
        fontSize: 'large',
    }
}) (Typography);

const ExpansionPanel = withStyles({
    root: {
        borderTop: '1px solid rgba(0,0,0,.75)',
        borderBottom:'1px solid rgba(0,0,0,.75)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        marginLeft: 0,
    },
    expanded: {
        margin: 'auto',
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: '#2c3e50',
        //borderBottom: '1px solid rgba(0,0,0,.75)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        color: 'rgba(255, 255, 255, 0.85)',
        '&$expanded': {
            margin: '12px 0',
        },
    },
    title: {
        backGroundColor: '#000',
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 1,
    },
}))(MuiExpansionPanelDetails);

export default function TopBar(props){
    //const classes = useStyles();
    const { expanded, topBarChange } = props;
    return (
        <div style={{flexGrow: 1}} >
            <AppBar position="static" id="app-bar">
                <Toolbar id="tool-bar">
                    <div className="row">
                        <div className="col-lg-3 col-xs-6 top-bar-container" id="personal-info">
                            <p id="name"><strong>John Salman</strong></p>
                            <p id="contact-info">jhnsalman@gmail.com | (805) 722-7664</p>
                            <div className="logo">
                                <a href="https://github.com/john-salman"><img alt="Github" src={github}/></a>
                                <div style={{width: '15px'}}></div>
                                <a href="https://www.linkedin.com/in/john-salman/"><img alt="Linked In" src={linkedin}/></a>
                                <div style={{width: '10px'}}></div>
                                <a href={resume}><InsertDriveFile alt="Resume" style={{color: '#FFFFFF', width: '40px', height: '48px'}}/></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xs-6 top-bar-container">
                            <img className="prof-pic" src={headshot} alt="Headshot of John Salman"/>
                        </div>
                        <div className="col-lg-2 col-xs-12 top-bar-container">
                            <ExpansionPanel
                                square
                                expanded={expanded === 'panel1'}
                                onChange={topBarChange('panel1')}
                            >
                                <ExpansionPanelSummary className="summary" id="left-summary">
                                    <Title className="title">About Me</Title>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails id="left-content">
                                    <Typography>
                                        <p>I am a recent graduate with distinction from the Computer Science Department of Sonoma State University,
                                            actively pursuing software engineering positions.</p>
                                        <p>I pride myself on maintaining a wide focus within software engineering. Picking up new technology and
                                            exploring new frontiers within the domain is what excites me. </p>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <div className="col-lg-2 col-xs-12 top-bar-container">
                            <ExpansionPanel
                                square
                                expanded={expanded === 'panel2'}
                                onChange={topBarChange('panel2')}
                            >
                                <ExpansionPanelSummary id="center-summary">
                                    <Title className="title">Education</Title>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails id="center-content">
                                    <Typography>
                                        <p><strong>Sonoma State University</strong>, Rohnert Park</p>
                                        <p><em>B.S. with Distinction, Cum Laude</em>, Computer Science</p>
                                        <p>Graduation Date: May 2019</p>
                                        <p>GPA: 3.52</p>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <div className="col-lg-3 col-xs-12 top-bar-container">
                            <ExpansionPanel
                                square
                                expanded={expanded === 'panel3'}
                                onChange={topBarChange('panel3')}
                            >
                                <ExpansionPanelSummary id="right-summary">
                                    <Title className="title">Technical Proficiencies</Title>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails id="right-content">
                                    <Typography>
                                        <p><strong>Proficient Languages :</strong> C/C++, Python, Javascript, HTML, SQL</p>
                                        <p><strong>Familiar Languages :</strong> Bash, Scheme, LaTeX, CSS, C#</p>
                                        <p><strong>Database :</strong> MySQL, MariaDB, AWSCloud, Firebase</p>
                                        <p><strong>Framework :</strong>React(Native), Amazon Alexa, .NET, Express</p>
                                        <p><strong>Misc. :</strong> Unix Command Line, CPU Analysis, Algorithm Analysis, Language Design, Git</p>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        );
}
