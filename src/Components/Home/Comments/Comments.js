import React, { useState, useEffect,value } from 'react';
import './comments.css'

const Comments = (props) => {
    console.log(props)
    const [pic, setPic] = useState([]);
    useEffect(()=> {
        fetch(`https://randomuser.me/api/?results=30`)
        .then(res => res.json())
        .then(data => setPic(data.results[0].picture))          
        
    },[]);
    console.log(pic)
    return (
        <div className="commentBody">
            
            <div className="commentimg">
                <img src={pic.medium} alt=""/>
            </div>
            <div className="comment">
            <h5>name: {props.comments.name}</h5> 
           <h5>Email :{props.comments.email} </h5>
           <h5>Comment :{props.comments.body} </h5>

            </div>
          
        </div>
    );
};

export default Comments;
