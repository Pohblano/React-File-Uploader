import jwt from 'jsonwebtoken'
import config from '../../config/config'
import User from '../models/User'


export default {
  // Signin/verify user and create cookie
  signin: (req, res)=> {
    const {id} = req.body;
    User.findOne({_id: id}, (err, user) => {
      if(err || !user) return res.status(401).json({err: "User not found"})
      // User authentication from login would go here
      ////////////////////////
      const token = jwt.sign({_id : user._id}, config.jwtSecret)
      res.cookie('t', token, {
        expire: new Date() + 9999
      })
      // return res.json({token, user: {_id: user._id, username: user.username, name: user.name }})
      return res.json({token, user})
    })
   
  },
  // Signout user and delete cookie
  signout: (req, res) => {
    res.clearCookie('t');
    return res.status('200').json({msg: 'signed out'})
  }
}
