import React, { Component } from 'react'
import Card from "./Components/Cards/Card";
import Result from "./Components/ResultCard/Results";
import  axios from "./Utils/AxiosConfig";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {

  state={}

    componentDidMount() {
      axios.get('/user')
        .then(data=>{
            this.setState(data);
        })  
    }

   
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path='/result/:username' render={ ()=> <Result parentState = {this.state}/> } />
          <Route path='/' render= { ()=> <Card parentState = {this.state}/> } />
        </Switch>
      </BrowserRouter>
       
      </div>
    )
  }
}

export default App;
