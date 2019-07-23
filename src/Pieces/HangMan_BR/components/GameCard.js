import React from 'react';
import { makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GuessBox from './GuessBox';

const useStyles = makeStyles( theme =>( {
    card: {
        minWidth: 275,
        maxWidth: 345,
        marginLeft: '30%',
        marginTop: '10%',
    },
    button: {
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));
export default function GameCard(props) {
    const classes = useStyles();
    const { current_hang_man, current_word, submitLetter, submitWord, reset, undo } = props;
    return (
        <Card className={classes.card}>
            <CardHeader
                title={current_word}
                action={
                    <div>
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => reset()}>
                            New Game?
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button} onClick={() => undo()}>
                            Undo?
                        </Button>
                    </div>
                }
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Hang Man
                </Typography>
               <CardMedia
                   className={classes.media}
                   image={current_hang_man}
                   title=""
               />
               <GuessBox submitLetter={submitLetter} submitWord={submitWord}/>

            </CardContent>
        </Card>
    );
}