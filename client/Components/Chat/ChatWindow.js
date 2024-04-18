import React from 'react'
import { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import api from '../../Api/api';


export default function ChatWindow({room, user, socket}){
  const [ lobby, setLobby ] = useState(null);
  const [ msg, setMsg ] = useState({});
  const [ messages, setMessages ] = useState([])

  useEffect(()=>{
   socket.on('chat-messages', (data) => {
     setMessages(data)
    //  console.log(data)
    })
    // socket.on('getChatMessages', data => {
    //   console.log(data);
    //   this.setState({chat:[...this.state.chat,data]});
    // })
    // api.chat.lobby(room.lobby)
    //   .then((res)=> setLobby(res))
    // setMessages(room.messages)
  },[room])

  const handleChange = (event) =>{
    const {name, value} = event.target;
    msg[name] = value 
    msg.roomID = room._id;
    msg.author = user.username;
  }

  const handleKeyPress = (event) => {
    if(event.key === "Enter" && event.target.value){
      socket.emit('sendMsg', msg)
      // api.chat.addMsg(msg)
      //   .then(res => {
      //     const {comment, messsages} = res
      //     console.log(comment, messages)
      //     // setMessages(res)
      //     socket.emit('sendMsg', comment)
      //   })
      
      event.target.value = ''
    }
  }

  socket.on('getMsg' , (msg) =>{
    // const arr = messages.push(msg)

    // setMessages(arr)
  })

  // console.log('ROOM: ',room)
  // console.log('MSG: ', msg)
  // console.log('LOBBY', lobby)
  // console.log(messages)
  return(
    <div className="w-75 ui  my-2 d-flex flex-row">
      {/* Messages Window */}
      <div className="ui segments w-75">
        {/* Header */}
        <div className="ui segment text-center">
          <h3>{room.title}</h3>
          
        </div>

        {/* Messages */}
        <div className="ui segment d-flex flex-column">
          {/* {(messages.length >1)? <ChatMessages messages={messages}/>: null} */}
          <ChatMessages messages={messages} user={user}/>
        </div>

        {/* Input */}
        <div className="ui segment d-flex input">
          <input className="ui input" type="text" name="body" placeholder="Press enter to send..." onChange={handleChange} onKeyPress={handleKeyPress}></input>
        </div>
      </div>

      {/* Lobby */}
      <div className="ui m-0 w-25 ui vertical menu">
        <p className="ui header item"> Lobby: </p>
        {(lobby)? <ChatLobby lobby={lobby}/> : null }
       
      </div>
      
    </div>
  )
}

function ChatLobby({lobby}){
  return lobby.map((user, idx) => 
    <div key={idx} className="ui item">
      <a>{user.username}</a>
    </div>)
}

function ChatMessages({messages, user}){
  const pClasses= ' msg-content px-4 py-1 m-0'
  const wrapperClasses = 'd-flex flex-column msg-wrapper w-50'
  const userStyle = `
  .msg-content {
    width: fit-content;
    border-radius: 12px;
    color: white;
    background-color: #ff695e;
  }
  .msg-receiver {
    background-color: #eeeeee;
    color: #37474f;
  }`

  console.log(messages)
  return <>
    {messages.map((msg, idx) => 
      <div id={msg._id} key={idx} className={(user.username !== msg.author)? `${wrapperClasses} align-self-end align-items-end` : `${wrapperClasses}`}>
        {/* CSS Styling */}
        <style type="text/css">{userStyle}</style>

        <p className={(user.username !== msg.author)? `${pClasses} msg-receiver` : `${pClasses}` }>{msg.body}</p>

        <p className="msg-details"><small>{moment(msg.date).toNow()}</small></p>
      </div>)}

  </>
}