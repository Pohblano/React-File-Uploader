import config from './../config/config'
import app from './express'
import mongoose from 'mongoose';
import socketIO from './io'


// Mongo database connection
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error (`Unable to connect to database: ${mongoUri}`)
})


//Server connection
const server = app.listen(config.port, (err) => {
  if(err) console.log(err)
  console.info('Server started on port %s.', config.port)
})

// Socket IO connection
socketIO.attach(server)
