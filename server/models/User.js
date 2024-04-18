import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
  ip: String,
  username: String,
  name: String,
  created: {
    type: Date,
    default: Date.now
  },
  chatRooms: Array,
})

export default mongoose.model('User', userSchema)