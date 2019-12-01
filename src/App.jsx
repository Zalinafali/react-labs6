import React from 'react'
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
        <PageEmployee/>
      </div>
    )
  }
}

export default App