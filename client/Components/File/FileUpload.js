import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Button, ProgressBar} from 'react-bootstrap';
import api from '../../Api/api'

///////////////////////////////////////
// File Uploader Component
///////////////////////////////////////
export default function FileUpload({socket}) {
  const [files, setFiles] = useState([]);
  const [uploading, setUpload] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFiles = (event)=>{
    event.preventDefault();
    const arr = []
    for(const file of event.target.files)
      arr.push(file)

    setFiles(arr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(files.length > 0){
      const formData = new FormData(event.currentTarget);
      api.file.upload(formData).then(() => socket.emit('refresh-directory') );
    }else return false
  };

  socket.on('uploadProgress' , (num) => {
    setUpload(true)
    setProgress(num)
    if(num === 100) {
      setUpload(false)
      setFiles([])
    }
  });
  
 
  return (
    <div id="File-Upload" className="d-flex w-100 flex-column mb-5">
      {/* File Upload form */}
      <Form className="ui form d-flex flex-column" onSubmit={handleSubmit}>
        <Form.File type="file" name="fileUploaded" label="Select a file to upload" onChange={handleFiles} multiple custom/>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>

      {/* Display Uploading  */}
      {(uploading)? <ProgressBar className="font-weight-bold" now={progress} animated="true"/> : null}
      
      {/* Display select files for upload */}
      <DisplaySelection files={files} />
    </div>
  )
}//////////////////////////////////////
///////////////////////////////////////

// Display data on selected uploads
function DisplaySelection({files}) {
  return (
    <section className="d-flex flex-column list-group">
      {files.map((file,idx) => 
        <div key={idx} className="list-group-item"> 
          <h4 className="mb-2"><i className={faSwitcher(file.type) + " font-weight-light"}></i> {file.name}</h4>
          <p className="d-inline small">Type: {file.type}</p> 
          <p className="d-inline ml-4 small">Size: {calcSize(file.size)}</p>
        </div>)}
    </section> 
  )
} 

// Switch awesome font based on file type
function faSwitcher(type){
  switch(type){
    case 'image/jpeg':
      return 'fa fa-file-image'
      break;
    case 'text/html':
      return 'fa fa-window-maximize'
      break;
    case 'application/zip':
      return 'fa-file-archive'
      break;
    case 'text/javascript':
      return 'fa-file-code'
      break;
    default:
      return "fa fa-file-alt"
  }
}

// Calculate and format file sizes
function calcSize(num){
  return (num > 1073741824)? `${Math.ceil(num/1073741824)} GB` : (num > 1048576)? `${Math.ceil(num/1048576)} MB` : (num > 1024)? `${Math.ceil(num/1024)} KB`:  'Damn your file is small';
}