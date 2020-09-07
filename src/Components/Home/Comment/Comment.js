import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Comment = () => {
    const {id} = useParams();
    const [comment,setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[]);
    console.log(comment);
    return (
        <div>
            {
                comment.map(comments => <Comments comments={comments}></Comments>)
            }
        </div>
    );
};

export default Comment;
