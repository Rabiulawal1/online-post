import React, { useEffect, useState, Component } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comment from '../Comment/Comment';
import './PostDetail.css';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    },[]);
    const history = useHistory();
    let handleclick = (id) =>{
        history.push(`/comments/${id}`);
  }
  const [comment,setComment] = useState([]);
  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(data => setComment(data))
  },[]);
    return (
        <div className="post">
            <h3>  Post details: </h3>
            <h5>   {post.body}</h5>
            <div>
            {
                comment.map(comments => <Comments comments={comments}></Comments>)
            }
        </div>
         
        </div>
    );
};

export default PostDetail;