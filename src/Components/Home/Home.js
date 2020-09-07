import React, { useState, useEffect } from 'react';
import logo from '../../../src/logo.jpg'
import './Home.css'
import Comment from './Comment/Comment';

const Home = () => {

      
    return (
        <div className="header">
            <div className="logo">
            <img src={logo} alt=""/>
            </div>
           
           <div className="menu">
               <a href="/home">Home</a>
               
               
               
           </div>
         

            
        </div>
    );
};

export default Home;