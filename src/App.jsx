import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import PageEmployeesList from './PageEmployeesList'
import PageEmployee from './PageEmployee'

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {

    };

  }

  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <PageEmployeesList></PageEmployeesList>
            </Route>
            <Route exact path="/new">
              <PageEmployee></PageEmployee>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App