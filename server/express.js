import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import Template from './../template'
import devBundle from './devBundle'
import path from 'path'
// Router files
import fileRouter from './routes/fileRouter'
import chatRouter from './routes/chatRouter'
import userRouter from './routes/userRouter'
import authRouter from './routes/authRouter'


const CURRENT_WORKING_DIRECTORY = process.cwd()

const app = express()
devBundle.compile(app)

// MIDDLEWARES
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(compress())
  .use(cors())
  .use('/dist', express.static(path.join(CURRENT_WORKING_DIRECTORY, 'dist')))
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  });
// ROUTES
app.use('/file', fileRouter)
app.use('/chat', chatRouter)
app.use(userRouter)
app.use(authRouter)

// Render template 
app.get('/', (req, res)=>{
  res.status(200).send(Template());
})


export default app;