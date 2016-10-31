import React, {Component} from 'react'
import {BrowserRouter, Miss, Match} from 'react-router'
import Home from '../Home'
import NotFound from '../../component/NotFound'

export default class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    )
  }
}
