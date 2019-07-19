import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent className='card'>
      <Typography id='text'>
        "{selectedQuote.quote}" -{' '}
        <span id='author'>{selectedQuote.author}</span>
      </Typography>
    </CardContent>

    <CardActions className='card'>
      <Button
        id='new-quote'
        variant='outlined'
        color='primary'
        size='medium'
        onClick={assignNewQuoteIndex}
      >
        New Quote
      </Button>
      <IconButton
        id='tweet-quote'
        size='medium'
        color='primary'
        target='_blank'
        href={`https://twitter.com/intent/tweet?text=${
          selectedQuote.quote
        }&hashtags=quote`}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;
