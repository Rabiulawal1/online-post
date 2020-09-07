import React, { useEffect, useState } from 'react';
import PostBox from './PostBox/PostBox';

const Post = () => {

    const [post,setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h1>Online Post</h1>
            {
                post.map(post => <PostBox post={post}></PostBox>)
            }
        </div>
    );
};

export default Post;