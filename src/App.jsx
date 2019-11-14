import React from 'react'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      employees: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({employees: data}))
      .then(() => this.setState({isLoading: false}));
  }

  render(){
    return(
      <div>
        {this.state.isLoading ? <label>Loading...</label> : 
          <div>Data loaded: {this.state.employees.length}</div>
        }
      </div>
    )
  }
}

export default App