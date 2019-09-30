import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Code from '@material-ui/icons/Code';

import './ProjectCard.css';

/*
* File: ProjectCard.js
* Description: This is the stencil for the portfolio section of the website. In its basic form its a
*              basic card with a button that redirects to github repo's with source code.
* Local File Dependencies: ProjectCard.css for styling
* */



export default function ProjectCard(props) {
    const { title, image, link, text, /*cardHoverChange, card_id, isCurrent*/} = props;

    return (
        <Card className={"card"/* + isCurrent*/} /*onMouseEnter={() => cardHoverChange(card_id)}
              onMouseLeave={() => cardHoverChange(card_id)}*/>
                <CardContent>
                    <p id="card-title">
                        <strong>{title}</strong>
                    </p>
                    <CardMedia
                        id="card-media"
                        image={image}
                        title={title}
                    />
                    <div id="text-wrap">
                        <p>
                            {text}
                        </p>
                    </div>
                    <form>
                        <Button style={{backgroundColor: '#bdc3c7'}} type="submit" formAction={link} size="small">
                            <Code /><p>Source</p>
                        </Button>
                    </form>
                </CardContent>
        </Card>
    );
}

