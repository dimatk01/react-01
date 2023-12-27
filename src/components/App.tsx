import React from 'react';
import Profile from './Profile/Profile';
import './App.css';
import {user} from "../mockData/index"

function App() {
  return (
    <div className="App">
     <Profile
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
     />
    </div>
  );
}

export default App;
