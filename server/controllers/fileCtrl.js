import { IncomingForm } from 'formidable';
import path from 'path';
import io from '../io'
import { rename, readdir, access } from 'fs-extra';
import {readFile, stat} from 'fs'
import mime from 'mime'

export default {

  upload: (req, res, next) => {
    //Formidable uploads to operating systems tmp dir by default
    const form = new IncomingForm({ 
      multiples: true,
      uploadDir: "./Uploads",
      keepExtensions: true
    });
    
    form.on('progress', (bytesReceived, bytesExpected) => {
      // Progress as percentage
      const progress = (bytesReceived / bytesExpected * 100).toFixed(2);
      const mb = (bytesExpected / 1024 / 1024).toFixed(1);
      console.log(`Uploading ${mb} MB  ${progress}%`)
      // Emit upload progress to components via real time
      io.sockets.emit('uploadProgress', (bytesReceived * 100) / bytesExpected);
    });
  
    form.parse(req, function (err, fields, files) {
      // Checks for multiple files
      if(files.fileUploaded.length > 0)
        files.fileUploaded.map( x => {
          //Rename the file to its original name
          rename(x.path, './Uploads/' + x.name, (err) => {
            if (err) throw err;
          });
        })
      else // for single files
        rename(files.fileUploaded.path, './Uploads/' + files.fileUploaded.name, (err) => {
          if (err) throw err;
        });
      res.status(200)
      res.end();
    });
  },

  download: (req, res) => {
    access(`./Uploads/${req.fileName}`, (err) => {
      if (err) {
        console.log(`./Uploads/${req.fileName} is not existed on disk`);
        res.redirect('/404');
        return;
      }
      console.log(`begin to download file ./Uploads/${req.fileName} in browser`);
      res.download(`./Uploads/${req.fileName}`, (downloadErr) => {
        if (err) {
          console.log(`file downloading error, now go to 404`, downloadErr);
          res.redirect(`/404`);
        }
        console.log(`file downloading done`);
      });
    });
  },

  preview: (req, res) => {
    const filePath = `Uploads/${req.fileName}`
    const type = mime.lookup(filePath).split('/')[0]
    const encoding = (type === 'text' || type === 'application')? 'UTF-8' : 'base64';

    readFile(filePath, encoding ,(err, data) => {
      if (err) throw err;
      res.json({
        type: type,
        content: data
      })
    });
  },
  
  directory: (req, res) => {
    const data = []
    readdir("./Uploads", {
      encoding: "UTF-8"
    }, function (err, files) {
      files.map(x => data.push(`./Uploads/${x}`))
      res.status(200).json(data)
    });
  },
  


}

