import React from 'react'
import { useState, useEffect, useRef } from 'react'
import api from '../../Api/api';

///////////////////////////////////////
// Chat Navigation
///////////////////////////////////////
export default function ChatNav({chatRooms, checkOpenForm, handleRoomInfo, user}){
  const [rooms, setRooms] = useState([]);

  useEffect( () => {
    api.chat.rooms().then(res => {
      const arr = res.filter( x => {
       return x.lobby.includes(user._id) === true
      })
      setRooms(arr)
    })
  }, [chatRooms])
  
  const handleClick = (event)=>{
    const id = event.target.id;
    const room = rooms.filter( x => x._id === id)
    handleRoomInfo(room)
  }

  return(
    <nav className="d-flex flex-column w-25 ui vertical menu my-2">
      <a onClick={() => checkOpenForm(true)} className="ui button outline inverted red m-0">Create <i className="fa fa-plus"></i></a>
      <ChatRooms rooms={rooms} handleClick={handleClick}/>
    </nav>
  )
}

// Chat Room Links
/////////////////////////////////
function ChatRooms({rooms, handleClick}){
  if(rooms.length > 0)
    return rooms.map( (room, idx) => <a key={idx} id={room._id} className="item" onClick={handleClick} >{room.title}  </a>)
  else
    return <p className="font-weight-light item">You haven't joined a room.</p>
}


