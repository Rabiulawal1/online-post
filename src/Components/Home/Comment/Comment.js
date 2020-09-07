import React, { useState, useEffect,value } from 'react';
import Comments from '../Comments/Comments';
import { useParams } from 'react-router-dom';

const Comment = (props) => {
    const {id} = useParams();
    const [comment, setComment] = useState([]);
    const [pic, setPic] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/`)
        .then(res => res.json())
        .then(data => setComment(data));
        console.log(comment)

    },[]);
    
    let comments = comment.slice(0,30);
    
    return (
        <div>
            {

                comments.map(comments => <Comments comments={comments}></Comments>)
            } 
          
        </div>
    );
};

export default Comment;