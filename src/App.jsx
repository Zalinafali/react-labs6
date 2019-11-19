import React from 'react'
import Form from './Form'

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      employees: null,
      isLoading: true,
      isAdding: false
    };

    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.reload = this.reload.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({employees: data}))
      .then(() => this.setState({isLoading: false}));
  }

  handleClickCancel(){
    console.log('Cancel button clicked');
    this.setState({isAdding : false});
  }

  reload(){
    console.log('Update after add');
    this.componentDidMount();
  }

  render(){
    return(
      <div>
        <p>
          {this.state.isLoading ? <label>Loading...</label> : 
            <div>Data loaded: {this.state.employees.length}</div>
          }
        </p>
        <div>
          {this.state.isAdding ? <Form 
                                    handlerCancel={this.handleClickCancel}
                                    handlerReload={this.reload}
                                  />
            :  <button onClick={() => this.setState({isAdding: true})}>Add employee</button>}
        </div>
      </div>
    )
  }
}

export default App