import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
  ip: String
})

const Client = mongoose.model('Client', clientSchema)

export default Client