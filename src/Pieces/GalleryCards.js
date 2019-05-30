import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Code from '@material-ui/icons/Code';

const styles = {
    card: {
        maxWidth: 450,
    },
    media: {
        height: 300,
        maxHeight: 600,
    },
};


function GalleryCards (props) {

    const {classes, image, link, text} = props;
    return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Current Project"
                    />
                    <CardContent>
                        <Typography component="p">
                           {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <form>
                        <Button type="submit" formaction={link} size="small" color="primary">
                            <Code /><p>Source</p>
                        </Button>
                    </form>
                </CardActions>
            </Card>
    );

}

GalleryCards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryCards);