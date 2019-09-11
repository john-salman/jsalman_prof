import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './ProjectCard.css';

export default function ProjectCard(props) {
    const { title, image, link, text} = props;

    return (
        <Card className="card">
            <a href={link}>
                <CardContent>
                    <Typography className="card-title" color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <CardMedia
                        className="card-media"
                        image={image}
                        title={title}
                    />
                    <Typography className="card-pos" color="textSecondary">
                        {text}
                    </Typography>
                </CardContent>
            </a>
        </Card>
    );
}