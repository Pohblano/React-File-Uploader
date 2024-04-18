import React from 'react'
import { useState, useEffect } from 'react'
import api from '../../Api/api'
import ChatForm from './ChatForm'
import ChatNav from './ChatNav'
import ChatWindow from './ChatWindow';

const userForm =["username","name"]
const chatForm = ["title" ]

///////////////////////////////////////
// Chat Component
///////////////////////////////////////
export default function Chat({socket}){
  // let ipAddress = ''
  let [ipAddress, setIP] = useState(()=> {
    // let address = ''
    // socket.on('online', (ip) => {
    //   // console.log(ip)
    //   address = ip;
    // })
    // return address
    return 'Fix this'
  });
  const [isOnline, setOnline] = useState(false);
  const [isNewUser, setNewUser] = useState(false);
  const [user, setUser] = useState(null);
  const [isOpen_Form, setOpenForm] = useState(false);
  // const [currentRoom, setRoom] = useState({_id:''})
  const [currentRoom, setRoom] = useState(null)

  useEffect(() => {
    socket.emit('auth')

    // Default event when component renders
    // socket.on('online', (ip) => {
      // setIP(ip)
      // api.user.profileIP(ip).then((res) => {
      //   console.log(res)
      //   const {err, id} =  res
      //   if(!err){
      //     api.auth.signin({id: id}).then((data) => {
      //       const {username, name, created, chatRooms, _id}= data.user;
      //       setUser({username, name, created, chatRooms, _id})
      //       setOnline(true);
      //     })
      //   }else setNewUser(true)
      // })
    // })


    // api.user.profileIP(ip).then((res) => {
    //   console.log(res)
    //   const {err, id} =  res
    //   if(!err){
    //     api.auth.signin({id: id}).then((data) => {
    //       const {username, name, created, chatRooms, _id}= data.user;
    //       setUser({username, name, created, chatRooms, _id})
    //       setOnline(true);
    //     })
    //   }else setNewUser(true)

      // api.user.profile(ip)
      //   .then((res) => {
      //     // console.log(res)   
      //     if(res) {
      //       const {username, name, created, chatRooms, _id}= res;
      //       setUser({username, name, created, chatRooms, _id})
      //       setOnline(true);
      //     }else setNewUser(true)
      //   })
   

    // Resets inital state data
    return () => {
      socket.emit('offline')
      setUser(null)
      setOnline(false)
      api.auth.signout()
    }
  },[socket])


  // // Default event when component renders
  // socket.on('online', (ip) => {
  //   setIP(ip)
  //   api.user.profileIP(ip).then((res) => {
  //     console.log(res)
  //     const {err, id} =  res
  //     if(!err){
  //       api.auth.signin({id: id}).then((data) => {
  //         const {username, name, created, chatRooms, _id}= data.user;
  //         setUser({username, name, created, chatRooms, _id})
  //         setOnline(true);
  //       })
  //     }else setNewUser(true)

      
  //   })
  // })
  
  const handleUserInfo = (formData)=>{
      formData.ip = ipAddress;
      api.user.register(formData).then((res) => {
        const { username, name, _id} = res
        setUser({username: username, name: name, id: _id})
      })
  }

  const handleChatInfo = (formData)=>{
    formData[user._id] = user.username  
    api.chat.addRoom(formData).then((res)=> {
      const room = {title: res.title, id:res._id}
      setOpenForm(false)
      socket.emit('createRoom', room);
    })
  }

  const handleRoomInfo = ([room]) => {
    // if(room._id === currentRoom._id) return false
    setRoom(room)
    socket.emit('joinRoom', room._id)
  }

  // const handleChatMsg = (msg) =>{
  //   socket.emit('msg-sent', msg)
  // }

  const checkOpenForm = (bool) => setOpenForm(bool)

  // socket.on('roomCreated', (id)=> {
  //   // console.log(id)
  // })

  // socket.on('joined', (socketID) => {
  //   console.log(socketID)
  // })

  console.log('USER IP', ipAddress)
  // console.log("FORM OPEN?: ", isOpen_Form)
  // console.log("NO USER: ",!user)
  // console.log('NEW USER?:', isNewUser)
  // console.log('USER PROFILE', user)
  return(
    <div className='d-flex flex-column ui segments p-3'>

      <h3 className="">Chat Rooms</h3>
      {/* Display form if user ip is not saved to client db. Upon true display all other chat components. */}

      {(isNewUser && !user)? <ChatForm handleUserInfo={handleUserInfo} inputs={userForm} type="register-user"/>: 
      <ChatHeader {...user}/>}

      {(user)? 
      <div className="d-flex flex-row mt-0">
        {(isOpen_Form)? <ChatForm handleChatInfo={handleChatInfo} checkOpenForm={checkOpenForm} inputs={chatForm} type="add-chatroom" />:
        <>  
          <ChatNav chatRooms={user.chatRooms} checkOpenForm={checkOpenForm} handleRoomInfo={handleRoomInfo} user={user}/>
          {(currentRoom)? <ChatWindow room ={currentRoom} user={user} socket={socket}/>: 
          <h1 className="font-weight-light w-75 text-center text-black-50"> Join a room<br/><span className='small font-weight-light text-danger '>(or create a new one)</span></h1>}
        </>
      }
      </div>:null}

    </div>
  )
}



// Chat Header
///////////////////////////////////////
function ChatHeader(user){
  const date = new Date(user.created)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return(
    <div className="d-flex flex-column align-items-center ui segment">
      <h2 className="m-0">Welcome {user.username}!</h2>
      <p className="m-0" >({user.name})</p>
      <span><sup className="font-weight-light">joined: {date.toLocaleDateString(undefined, options)}</sup></span>
    </div>
  )
}



