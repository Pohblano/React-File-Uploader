import React, {Component} from 'react'
import MainHeader from './MainHeader'
import FileUpload from './File/FileUpload'
import FileDownload from './File/FileDownload'
import FilePreview from './File/FilePreview'
import Chat from './Chat/Chat'
import io from 'socket.io-client'

const socket = io("http://localhost:4040");
socket.on('connect', () => console.log('Connected @ (Home)'))

///////////////////////////////////////
// Home Component
///////////////////////////////////////
class Home extends Component{
  constructor(props){
    super()
    this.state = { 
      path: '',
      chatOpen: false
    }
    this.handleFileData = this.handleFileData.bind(this);
    this.isChatOpen = this.isChatOpen.bind(this);
  }
  componentDidMount(){
    const isOpen = JSON.parse(sessionStorage.getItem('chatOpen'))
    this.setState({chatOpen: isOpen})
  }

  handleFileData(data){
    this.setState({path: data})
  } 

  isChatOpen(bool){
    this.setState({chatOpen: bool})
    sessionStorage.setItem('chatOpen', JSON.stringify(bool))
  }

  render(){
    const {handleFileData, isChatOpen} = this;
    const {path, chatOpen} = this.state;
    return(
      <div className ="align-self-center w-75">
        <MainHeader isChatOpen={isChatOpen} />

        {(chatOpen)?
          <Chat socket={socket}/> :
        <>
          <h3>File Manager</h3>
          <FileUpload socket={socket} />
          <FileDownload getFilePath={handleFileData} socket={socket} />
          {(path)? <FilePreview socket={socket} filePath={path} /> : null }
        </>
        }
        
      </div>
    )
  }
}
export default Home;