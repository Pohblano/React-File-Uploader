import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import api from '../../Api/api'

///////////////////////////////////////
// File Preview Component
///////////////////////////////////////
export default function FilePreview({socket, filePath}){
  const [ type , setType] = useState('')
  const [ content, setContent ] = useState('')
  const [file, setFile] = useState({
    type: '',
    content: ''
  })

  useEffect(()=>{
    const path = filePath.split('./')[1]
    api.file.preview(path)
      .then(({type, content})=> {
        setFile({
          type,
          content: (type === 'image')? `data:;base64,${content}` : content
        })
      })
  }, [filePath])
 

  return(
    <div id="File-Preview">
      <h3 className="d-flex justify-content-between">File Preview 
        <a className="btn btn-outline-primary" href={`file/${filePath.split('./')[1]}`}> Download</a>
      </h3>

      {(file.type==='image') ? <img src={file.content} height="auto" className='w-100'></img> 
      : <div>{file.content}</div>}


    </div>
  )
}