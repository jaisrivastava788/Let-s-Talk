import React, { useState, useEffect} from "react";
import { Button,Input,FormControl,InputLabel} from '@material-ui/core';
import Message from "./Message";
import db from "../firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton } from '@material-ui/core';

function App() {

const [input, setInput] = useState("");
const [messages, setMessages] = useState( [] );
const [username, setUserName] = useState("");


useEffect(() => {
  
db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  setMessages(snapshot.docs.map(doc => ({id: doc.id, text: doc.data()})))
})
}, [] )


useEffect(() => {
   setUserName(prompt("Please enter your name")) }
, [] )


function message(event){
 setInput(event.target.value);
}

function send(event){
    db.collection('messages').add({
     text: input,
     username: username,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   })
//    setMessages( prevValue => {
//    return([...prevValue, {username: userName, text: input}]) 
//  });
  setInput(" ");
  event.preventDefault();
}
return <div>
        
<img src="https://img.icons8.com/fluent/96/000000/facebook-messenger--v2.png"/>
 <h1>Welcome {username} Let's Talk</h1>
 
     <form className="info">
           <FormControl className="form">
           {/* <div> */}
            <InputLabel >Type a message</InputLabel>
            <Input className="ip" placeholder="type a message" value={input} onChange={message} />

            <IconButton className="btn" disabled={!input} variant="contained" type="submit" onClick={send} color="primary">
              <SendRoundedIcon />
            </IconButton>
          {/* </div> */}
           </FormControl>     
    </form>
  
          <FlipMove>
           {messages.map( ({id,text}) => 
            {return<Message key={id} name={username} text={text} />})}
          </FlipMove>
          
        </div>;
}


export default App;