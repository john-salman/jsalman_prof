import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';


import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './SideBar.css';

const primary = blueGrey[500];
const headshot = require('../Photos/Headshot.png');
const github = require('../Photos/GitHub.svg');
const linkedin = require('../Photos/LinkedIn.svg');
const resume = require('./JS_Resume.pdf');

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[500]}, // Purple and green play nicely together.
        secondary: { main: blue[300]}, // This is just green.A700 as hex.
    },
});

const Title =  withStyles({
   root: {
       color: 'white',
       textAlign: 'center',
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
    },
    expanded: {
        margin: 'auto',
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: '#5c6bc0',
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
        backGroundColor: primary,
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    },
}))(MuiExpansionPanelDetails);

class SideBar extends React.Component {
    state = {
        expanded: '',
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        console.log(resume);
        const { expanded } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <div className="me">
                        <img className="prof-pic" src={headshot} alt="A photo of myself"/>
                        <p className="name">John Salman</p>
                        <div className="info-div" color="#FFFFFF">
                            <p>jhnsalman@gmail.com</p>
                        </div>
                        <div className="logo-div">
                            <a href="https://github.com/john-salman"><img alt="Github" src={github}/></a>
                            <div style={{width: '15px'}}></div>
                            <a href="https://www.linkedin.com/in/john-salman/"><img alt="Linked In" src={linkedin}/></a>
                            <div style={{width: '10px'}}></div>
                            <a href={resume}><InsertDriveFile alt="Resume" style={{color: '#FFFFFF', width: '40px', height: '48px'}}/></a>
                        </div>
                    </div>
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel1'}
                        onChange={this.handleChange('panel1')}
                    >
                        <ExpansionPanelSummary className="title">
                            <Title>About Me</Title>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                    <p>There is nothing better than learning new technology, writing quality code, and first time compiles. I am
                                        recent graduate from the Computer Science Department at Sonoma State. I'm hungry for the opportunity to
                                        begin my professional career, where I can spend my days contributing to projects bigger than myself. Software
                                        has given so much to this world already, and I'm looking to make my mark.
                                    </p>
                                    <p>In school, I have always gone above and beyond to gain the most in depth understanding of all domains of computer science.
                                        I take pride in being a jack-of-all-trades, and enjoy throwing myself into the deep end. The best programs to build are
                                        those that push me to write efficient and effective code, and I also love building websites and configuring back-end systems.
                                    </p>
                                    <p>Rock climbing is my next greatest passion. It is hard to beat the feeling of topping out on a multi-week project route, but whenever
                                        I can get my blood pumping and sweat running is a good time to me. I look for any chance to get outside, be it trail-running,
                                        disk-golf, fishing, gardening, camping, hiking with my dog, or anything that helps me finish the day dirt-covered and tired.
                                    </p>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel2'}
                        onChange={this.handleChange('panel2')}
                    >
                        <ExpansionPanelSummary>
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
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel3'}
                        onChange={this.handleChange('panel3')}
                    >
                        <ExpansionPanelSummary>
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
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel4'}
                        onChange={this.handleChange('panel4')}
                    >
                        <ExpansionPanelSummary style={{backGroundColor: blue[500]}}>
                            <Title>Volunteering</Title>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <p><strong>NomaHacks 2019 Organizer</strong></p>
                                <p>I maintained the website, adding new assets, and updating old. I visited classrooms to spread the word, and increase attendance.
                                    I also volunteered for the whole event, staying overnight to help the event run smoothly.</p>
                                <br/>
                                <p><strong>Red Cross Shelter Volunteer</strong></p>
                                <p>While my school was evacuated during the Tubbs Fire, I volunteered at the main Red Cross evacuation shelter at the Sonoma State Fairgrounds.
                                    I was placed in charge of the inflow and outflow of the main donation area, ensuring that donations were taken in and distributed to neighboring
                                    shelters efficiently. I volunteered for 10 days, and coordinated with county officials and other volunteer agencies to help local shelters
                                    obtain critical supplies.</p>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </ThemeProvider>
        );
    }
}

export default SideBar;