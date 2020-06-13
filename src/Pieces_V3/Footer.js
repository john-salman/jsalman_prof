import React from 'react';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

import './css/footer.css';

export default function Footer(props) {

    const { resume, github, linkedin } = props;

    return (

		   <div id="footer-total-wrapper">
		   		<div id="footer-email-wrapper">
		   			<a id="footer-email-link" href="mailto: jhnsalman@gmail.com">jhnsalman@gmail.com</a>
		   		</div>
		   		<div id="footer-logos-wrapper">
                    <a href="https://github.com/john-salman"><img alt="Github" src={github}/></a>
                    <div style={{width: '15px'}}></div>
                    <a href="https://www.linkedin.com/in/john-salman/"><img alt="Linked In" src={linkedin}/></a>
                    <div style={{width: '10px'}}></div>
                    <a href={resume}><InsertDriveFile alt="Resume" style={{color: '#FFFFFF', width: '40px', height: '48px'}}/></a>
                </div>
           </div>
	)
}