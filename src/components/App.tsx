import React from 'react';
import Profile from './Profile/Profile';
import './App.css';
import {user, friends, transactions} from "../mockData/index"
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

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
        <FriendList friends={friends}/>
        <TransactionHistory transactions={transactions}/>
    </div>
  );
}

export default App;
