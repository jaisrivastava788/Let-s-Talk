import React, { forwardRef } from 'react';
import { Card,CardContent,Typography } from '@material-ui/core';
import "./Message.css";

const Message = forwardRef(({name, text},ref) =>{

    const isUser = name === text.username;

    return (
    
      <div ref={ref} className = {`message ${isUser && 'message_user'}`}> 
       <Card className="box" >
         <CardContent className = {isUser ?" message_userCard" :"message_guestCard"}>
           <Typography variant="h5" component="h2" >
              {!isUser && `${text.username || 'unknown'} : `}{text.text}
           </Typography>
         </CardContent>
       </Card>
      </div>
      
         )
    });
export default Message;