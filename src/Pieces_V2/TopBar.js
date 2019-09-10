import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

import './TopBar.css';

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

class TopBar extends React.Component {

    state = {
        expanded: '',
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="static" id="app-bar">
                    <Toolbar id="tool-bar">
                        <div className="row">
                            <div className="col-lg-3 col-xs-6 top-bar-container" id="personal-info">
                                <p>John Salman</p>
                                <p>jhnsalman@gmail.com | (805) 722-7664</p>
                                <div className="logo-div">
                                    <a href="https://github.com/john-salman"><img alt="Github" src={github}/></a>
                                    <div style={{width: '15px'}}></div>
                                    <a href="https://www.linkedin.com/in/john-salman/"><img alt="Linked In" src={linkedin}/></a>
                                    <div style={{width: '10px'}}></div>
                                    <a href={resume}><InsertDriveFile alt="Resume" style={{color: '#FFFFFF', width: '40px', height: '48px'}}/></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-xs-6 top-bar-container">
                                <img className="prof-pic" src={headshot} alt="A photo of myself"/>
                            </div>
                            <div className="col-lg-2 col-xs-12 top-bar-container">
                                <ExpansionPanel
                                    square
                                    expanded={expanded === 'panel1'}
                                    onChange={this.handleChange('panel1')}
                                >
                                    <ExpansionPanelSummary  id="left-summary">
                                        <Title>About Me</Title>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <p>I am a recent graduate with distinction from the Computer Science Department of Sonoma State University,
                                                actively pursuing software engineering positions.</p>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                            <div className="col-lg-2 col-xs-12 top-bar-container">
                                <ExpansionPanel
                                    square
                                    expanded={expanded === 'panel2'}
                                    onChange={this.handleChange('panel2')}
                                >
                                    <ExpansionPanelSummary id="center-summary">
                                        <Title className="title">Education</Title>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
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
                                    onChange={this.handleChange('panel3')}
                                >
                                    <ExpansionPanelSummary id="right-summary">
                                        <Title className="title">Technical Proficiencies</Title>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <p><strong>Proficient Languages :</strong> C/C++, Python, Javascript, HTML, SQL</p>
                                            <p><strong>Familiar Languages :</strong> Bash, Scheme, LaTeX, CSS, C#</p>
                                            <p><strong>Database :</strong> MySQL, MariaDB, AWSCloud, Firebase</p>
                                            <p><strong>Framework :</strong>React(Native), Amazon Alexa, NodeJS, .NET</p>
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

}

export default TopBar;