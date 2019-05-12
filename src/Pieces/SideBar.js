import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const headshot = require('../Photos/Headshot.png');


const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0,0,0,.125)',
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
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
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
        expanded: 'panel1',
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        return (
            <div>
                <div className="me">
                    <img className="prof-pic" src={headshot} alt="A photo of myself"/>
                    <p className="name">John Salman</p>
                    <p>jhnsalman@gmail.com</p>
                    <a href="https://github.com/john-salman">Github</a>
                </div>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel1'}
                    onChange={this.handleChange('panel1')}
                >
                    <ExpansionPanelSummary>
                        <Typography>About Me</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                                <p>There is nothing better than learning new technology, writing quality code, and first time compiles. I am a
                                    a graduating senior from the Computer Science Department at Sonoma State. I'm hungry for the opportunity to
                                    begin my professional career, where I can spend my days contributing to projects bigger than myself. Software
                                    has given so much to this world already, and I'm looking to make my mark.
                                </p>
                                <p>In school, I have always gone above and beyond to gain the most in depth understanding of all domains of computer science.
                                    I take pride in being a jack-of-all-trades, and enjoy throwing myself into the deep end. Building large scale applications
                                    will always put a smile on my face, but I get just as much out of building websites or digging around beneath operating systems.
                                </p>
                                <p>Rock climbing is my next greatest passion. It is hard to beat the feeling of topping out on a multi-week project route, but whenever
                                    I can get my blood pumping and sweat running is a good time to me. I look for any chance to get outside, be it trail-running,
                                    disk-golf, fishing, gardening, camping, and anything that helps me finish the day dirt-covered and tired.
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
                        <Typography>Collapsible Group Item #2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p><strong>Sonoma State University</strong>, Rohnert Park</p>
                            <p><em>Bachelor of Science with Distinction</em>, Computer Science</p>
                            <p>Expected Graduation Date: May 2019</p>
                            <p>GPA: 3.49</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel3'}
                    onChange={this.handleChange('panel3')}
                >
                    <ExpansionPanelSummary>
                        <Typography>Technical Proficiencies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <p><strong>Proficient Languages :</strong> C++, Python, Javascript (+ NodeJS), HTML, CSS, C, SQL</p>
                            <p><strong>Familiar Languages :</strong> Bash, Scheme, LaTeX</p>
                            <p><strong>Database :</strong> MySQL, MariaDB, AWSCloud, Firebase</p>
                            <p><strong>Framework :</strong> MVC, React(Native), Amazon Alexa</p>
                            <p><strong>Misc. :</strong> Unix Command Line, CPU Analysis, Algorithm Analysis, Language Design</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel3'}
                    onChange={this.handleChange('panel3')}
                >
                    <ExpansionPanelSummary>
                        <Typography>Technical Proficiencies</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default Sidebar;