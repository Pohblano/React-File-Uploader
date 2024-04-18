import ChatRoom from '../models/ChatRoom'
import User from '../models/User'
import moment from 'moment'

export default {
  // Return list of users in specified chatroom
  lobby: (req, res) => {
    const lobby = req.body;
    User.find({_id: { $in: lobby}}, (err, docs)=>{
      res.status(200).json(docs)
    }).select('_id name username')

  },
  // Return all chatroom profiles
  chatRooms: (req, res) => {
    ChatRoom.find({}, (err, docs) => {
      res.status(200).json(docs)
    })
  },
  // Add new chat room
  addRoom: (req, res) => {
    const {title} = req.body;
    const lobby = Object.keys(req.body).filter( x => x !== 'title');
    const [author_id, author] = Object.entries(req.body).filter( ([prop, val]) => (prop !== 'title' &&  typeof(val) === 'string'))[0];
    const room = new ChatRoom({title, lobby, author, author_id})

    lobby.map( id => User.findById(id, (err, doc) => {
      doc.chatRooms.push(room._id);
      doc.save()
    }))

    room.save((err, data) => {
      console.log(data, "new chatroom data")
      if(err) console.log(err)
      res.status(200).json(data)
    })
  },
  addMsg: (req, res) => {
    const {roomID, author, body } = req.body
    const date = moment()
    ChatRoom.findById(roomID, (err, doc) => {
      doc.messages.push({author, body, date })
      doc.save((err, data) => {
        console.log(data, "new msg data")
        if(err) console.log(err)
        res.status(200).json({messages: data.messages,comment: {author, body, date}})
      })
    })
    
  },

    // // Save new user profile
  // register: (req, res, next) => {
  //   const {name, username, ip} = req.body;
  //   User.findOne({ ip: ip }, (err, doc) => {
  //     if(!doc){
  //       const user  = new User({name, username, ip})
  //       user.save((err, data) => {
  //         console.log(data, "new user data")
  //         if(err) console.log(err)
  //         res.status(200).json(data)
  //       })
  //     }else{
  //       res.status(200).json({err: 'IP address is already registered'})
  //     }
  //   })
  // },

  // // Return user profile 
  // profile: (req, res) => {
  //   const {address} = req;
  //   User.findOne({ ip: address }, (err, doc) => {
  //     if(err)  res.status(200).json({err: 'No user profile found'})
  //     else res.status(200).json(doc)
  //   })
  // },

  // // Return all user profiles
  // users: (req, res) => {
  //   User.find({}, (err, docs) => {
  //     res.status(200).json(docs)
  //   }).select('_id name username')
  // },


}

