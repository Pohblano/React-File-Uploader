import User from '../models/User'

export default {
  // Save new user profile
  register: (req, res, next) => {
    const {name, username, ip} = req.body;
    User.findOne({ ip: ip }, (err, doc) => {
      if(!doc){
        const user  = new User({name, username, ip})
        user.save((err, data) => {
          console.log(data, "new user data")
          if(err) console.log(err)
          return res.status(200).json(data)
        })
      }else{
        return res.status(200).json({err: 'IP address is already registered'})
      }
    })
  },
  profile: (req, res) => {
    // password decryptions would happen here
    return res.json(req.profile)
  },
  // Return user profile 
  address: (req, res) => {
    return res.json({id: req.id._id})
  },
  // Return all user profiles
  users: (req, res) => {
    User.find({}, (err, docs) => {
      res.status(200).json(docs)
    }).select('_id name username')
  },
  //
  userIP: (req, res, next, address) => {
    User.findOne({ ip: address }, (err, doc) => {
      if(err || !doc) return res.status(200).json({err: 'No user profile found by IP'})
      req.id = doc;
      next();
    })
  },
  //
  userID: (req, res, next, id) => {
    User.findOne({ _id: id}, (err, doc) => {
      if(err || !doc)  res.status(400).json({err: 'No user profile found by ID'})
      req.profile = doc;
      next()
    })
  }
  
}