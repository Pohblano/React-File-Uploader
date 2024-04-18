import React from 'react'
import { useState, useEffect, useRef } from 'react'
import api from "../../Api/api"

export default function ChatForm({handleUserInfo, handleChatInfo, inputs, type, checkOpenForm}){
  const [ formData, setData ] = useState({});
  const [ err, setErr ] = useState([])
  const [ users, setUsers ] = useState(null);

  useEffect(()=>{
    if(type === 'add-chatroom')
      api.user.users().then( data => setUsers(data))

    return () => setErr([])
  },[inputs])

  const handleChange = (event) => {
    const {name} = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    formData[name] = value
  }

  const handleValidation =(event) => {
    const {name, value } = event.target;
    const text = `Enter a ${name}`;
    (!value)? (!err.includes(text))? setErr([ text, ...err]): null : setErr(err.filter(x => x !== text))
  }

  const handleClick = (event) => {
    const fields = Object.keys(formData).length;
    switch(type){
      case 'register-user':
        console.log(formData);
        (fields >= 2)? handleUserInfo(formData) : null;
        break;
      case 'add-chatroom':
        console.log(formData);
        (fields >= 1)? handleChatInfo(formData): null;
        break;
    }
    
  }

  return(
    <div className="d-flex flex-column ui error form segment w-100">
      { (type === "add-chatroom")? <a className="align-self-end text-danger" onClick={() => checkOpenForm(false)}><i className="fa fa-window-close"></i></a> : null  }
      
      {inputs.map( (inputName, idx)  => 
        <div className="field" key={idx}>
          <label>{inputName.toUpperCase()}</label>
          <input className ="" type="text" name={inputName} onChange={handleChange} onBlur={handleValidation}/>
        </div> 
      )}

      {(users)? 
      <div className="field">
        <label>USERS</label>
        <div className=" d-flex flex-wrap justify-content-between">
          {users.map( (user, idx)=> 
            <div className="ui checkbox" key={idx}>
              <input type="checkbox" name={user._id} onChange={handleChange}/>
              <label>{user.name}</label>
            </div> 
          )}
        </div>
      </div>: null}

      <button className="ui button inverted red" onClick={handleClick}>Add</button>
     
      {(err)? err.map( (text, idx) => <div key={idx} className="ui error message">{text}</div> ): null}
    </div>
  )
}

