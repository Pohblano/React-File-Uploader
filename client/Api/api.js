import axios from 'axios';

const api = {
  //////////////////////////
  auth:{
    signin: (data) => axios.post('/auth/signin', data)
      .then(res => res.data)
      .catch(err => console.log(err)),

    signout: () => axios.get('/auth/signout')
      .then(res => res.data)
      .catch(err => console.log(err)),

  },
  //////////////////////////
  user: {
    // POST new user information
    register: (data) => axios.post('/users', data)
      .then(res => res.data)
      .catch(err => console.log(err)),
    // GET all users profiles
    users: () => axios.get(`/users`)
      .then(res => res.data)
      .catch(err => console.log(err)),

    // GET user profile
    profileID: (id) => axios.get(`/users/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err)),
    //
    profileIP: (ip) => axios.get(`/users/client/${ip}`)
      .then(res => res.data)
      .catch(err => console.log(err)),
 

  },
  //////////////////////////
  chat: {

    // GET room lobby users
    lobby: (arr) => axios.post(`/chat/lobby`, arr)
      .then(res => res.data)
      .catch(err => console.log(err))
    ,
    // GET all rooms
    rooms: () => axios.get(`/chat/rooms`)
      .then(res => res.data)
      .catch(err => console.log(err))
    ,
    // POST new room
    addRoom: (data) => axios.post('/chat/addRoom', data)
      .then(res => res.data)
      .catch(err => console.log(err))
    ,
    // POST new msg
    addMsg: (data) => axios.post('/chat/addMsg', data)
      .then(res => res.data)
      .catch(err => console.log(err))

  },
  //////////////////////////
  file: {

    // POST file data to server
    upload: (data) => axios.post('/file/upload', data, {
      headers: { 'Content-Type': 'multipart/files' }
    }).then(res => res)
      .catch(err => console.log(err)),

    // GET list of all files for download
    directory: () => axios.get('/file/directory')
      .then(res => res.data)
      .catch(err => console.log(err)),

    // GET specfic file data-content
    preview: (fileName) => axios.get(`/file/preview/${fileName}`)
      .then(res => res.data)
      .catch(err => console.log(err)),

  },


}

export default api