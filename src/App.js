import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Post from './Components/Home/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import NoMatch from './Components/Home/NoMatch/NoMatch';
import PostDetail from './Components/Home/PostDetail/PostDetail';
import Comment from './Components/Home/Comment/Comment';
import commentBox from './Components/Home/commentBox/commentBox';
import Comments from './Components/Home/Comments/Comments';

function App() {
  return (
    <div >
      <Home></Home>
      <Router>
        <Switch>
          <Route path="/home">
          <Post></Post>
          </Route>
          <Route path="/details/:id">
            <PostDetail></PostDetail>
          </Route>
          <Route path="/comments">
            <Comment></Comment>
          </Route>
          <Route exact path="/">
          <Post></Post>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
      
      

    
     
    </div>
  );
}

export default App;
