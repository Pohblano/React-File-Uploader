import React from 'react'
import {render} from 'react-dom'
import App from './App'

if(module.hot){
  module.hot.accept('./App', () => {
    const NextApp = App
    render(<NextApp/>, document.getElementById('root'))
  })
}

render(<App />, document.getElementById('root'));
