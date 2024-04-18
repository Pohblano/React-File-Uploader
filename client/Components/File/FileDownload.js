import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Button, ProgressBar} from 'react-bootstrap';
import api from '../../Api/api'


///////////////////////////////////////
// File Downloader Component
///////////////////////////////////////
export default function FileDownload({socket, getFilePath}) {
  const [links, setLinks] = useState([])

  // Make initial call to attain list of links
  useEffect(() => {
    api.file.directory()
      .then(data => setLinks(data))
    
    return () => setLinks([])
  }, [])

  // Get new directory list after every upload. Makes it more real time
  socket.on('new-directory', (data) => setLinks(data))

  const handleLinkClick = (event) =>{
    event.preventDefault()
    getFilePath(event.target.textContent)
  }

  return(
    <div id="File-Download" className="mb-5">
      <h3 className="">Download Links </h3>

      <nav className="d-flex flex-column">
      {links.map((link, idx) => 
        <a key={idx} href={`file/${link.split('./')[1]}`} onClick={handleLinkClick} >{link}</a> 
        )}
      </nav>

    </div>
  )
}

