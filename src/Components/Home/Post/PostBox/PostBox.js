import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PostBox.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PostBox = (props) => {
  const {title,id} = props.post;
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory();
  let handleclick = (id) =>{
    history.push(`/details/${id}`);
  }
    return (
        <div className="postDisplay">
            <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h3> The post title:</h3>
        </Typography>
        <Typography variant="body2" component="p">
          <h3>Post Title : {title}</h3>         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary" onClick={() => handleclick(id)}>Post details</Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default PostBox;