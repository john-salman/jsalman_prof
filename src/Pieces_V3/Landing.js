import React from 'react';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

import './css/landing.css';

export default function LandingMain(props) {

    const { propAbout, landing, resume, github, linkedin } = props;

	return (
		<div id="landing-total-wrapper">
			<div id="landing-left-wrapper">
				<div id="landing-name">
					John Salman
				</div>
			     <div id="landing-logos-wrapper">
                    <a href="https://github.com/john-salman"><img alt="Github" src={github}/></a>
                    <div style={{width: '15px'}}></div>
                    <a href="https://www.linkedin.com/in/john-salman/"><img alt="Linked In" src={linkedin}/></a>
                    <div style={{width: '10px'}}></div>
                    <a href={resume}><InsertDriveFile alt="Resume" style={{color: '#FFFFFF', width: '40px', height: '48px'}}/></a>
                </div>
				<div id="landing-about">
					{propAbout}
				</div>
			</div>
			<div id="landing-right-wrapper">
			    <p><strong>Sonoma State University</strong>, Rohnert Park</p>
                <p><em>B.S. with Distinction, Cum Laude</em>, Computer Science</p>
                <p>Graduation Date: May 2019</p>
                <p>GPA: 3.52</p>
			</div>
			<div style={{clear:'both'}}></div>
		</div>
	)
}