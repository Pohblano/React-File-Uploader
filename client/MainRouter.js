import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'


class MainRouter extends Component{
  render(){
    return(
        <Switch>
          <Route exact path="/" component={Home}/>
         
        </Switch>
  )}
}

export default MainRouter;