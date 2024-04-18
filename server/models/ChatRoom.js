import mongoose from 'mongoose';

const chatRoomSchema = new mongoose.Schema ({
  title: String,
  author: String,
  author_id: String,
  created: {
    type: Date,
    default: Date.now
  },
  lobby: Array,
  messages: [
    {
      author: String,
      body: String, 
      date: Date
    }
  ]
  

})

export default mongoose.model('ChatRoom', chatRoomSchema)