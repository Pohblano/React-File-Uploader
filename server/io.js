import io from 'socket.io'
import { readdir } from 'fs-extra';
import Client from '../server/models/Client'
import ChatRoom from '../server/models/ChatRoom'
import moment from 'moment'


const socketIO = io()
const sockets_by_id = {}
const rooms = [];

// console.log(socketIO)

// Main IO connection
socketIO.sockets.on('connection', function(socket){
  const ip = socket.handshake.address.split(':')[3];
  sockets_by_id[socket.id] = socket;
  ///////////////////////////////////
  // Other Real-time functionality //
  ///////////////////////////////////
  socket.on('refresh-directory', () => {
    const data = []
    readdir("./Uploads", {
      encoding: "UTF-8"
    }, (err, files) =>  {
      files.map(x => data.push(`./Uploads/${x}`))
      socket.emit('new-directory', data)
    });
  })

  ///////////////////////////////////
  ///*********CHAT EVENTS ********///
  ///////////////////////////////////

  // Users is verified or created upon entering chat lobby
  socket.on('auth', function(){
    console.log(`${ip} has entered the Lobby`)
    Client.findOne({ip:ip}, function(err, doc){
      if(!err || doc){
        const client = new Client({ip:ip})
        client.save((err, doc) => {
          if(err) console.log(err)
        });
      }
    })
    // User connects to chat lobby
    socketIO.emit('online', ip);  
  })

  // User disconnects from chat lobby
  socket.on('offline', function(){
    console.log(`${ip} has left the lobby`)
  })


  socket.on('createRoom', (room) => {
      // const{ title, id} = room
      socket.join(room.id)
      socketIO.sockets.emit('roomCreated', room.id);
  });

   
  socket.on('joinRoom', (roomID) => {
    console.log(`${ip} joined ${roomID} `)
    socket.join(roomID)
    getRoom(roomID)
    // socket.emit('chat-messages', getRoom(roomID)
    // console.log(getRoom(roomID))
  });

  function getRoom(roomID){
    ChatRoom.findById(roomID, (err, doc) => {
      socket.emit('chat-messages', doc.messages)
    })
  }


   // Receive, modify, and send back msg
   socket.on('sendMsg', function(data) {
    const {roomID, author, body } = data
    const date = moment()
    ChatRoom.findById(roomID, (err, doc) => {
      doc.messages.push({author, body, date })
      socketIO.to(roomID).emit("getMsg", doc.messages[doc.messages.length-1]);

      // doc.save((err, data) => {
      //   if(err) console.log(err)
      //   socketIO.to(roomID).emit("getMsg", doc.messages[doc.messages.length-1]);
      // })
    })
    // msg.ip = socket.handshake.address.split(':')[3];
    // msg.timestamp = moment();
    // socketIO.to(msg.roomID).emit("getMsg", doc.messages[doc.messages.length-1]);
  });

  // socket.join("sessionId");

  // socket.on('join', function(room){
  //   console.log('Joined room'); 
  //   socket.join(room);  
  //   io.to(room).emit('joined', socket.id);
  //   // socket.emit('lobby', sockets_by_id)
  // });

  // socket.on('leave', function(room){
  //   console.log(`${socket.id} left room`);
  //   socket.leave(room);
  //   io.to(room).emit('left', socket.id);
  // })

 

  // User disconnect
  // socket.on('disconnect', function(){
  //   console.log( "Good bye", socket.handshake.address.split(':')[3], "disconnected");
  // });

  //User diconnects from main IO connection that starts at Home component
  socket.on('disconnect', function() {
    console.log(ip,'Got disconnect!');
 });
});

export default socketIO