import React from 'react'
import Form from './Form'
import EmployeesList from './EmployeesList'

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      employees: null,
      isLoading: true,
      isAdding: false,
      deleteId: ''
    };

    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.employeeDelete = this.employeeDelete.bind(this);
    this.reload = this.reload.bind(this);
  }

  componentDidMount() {
    this.employeesGet();
  }

  employeesGet(){
    fetch('http://localhost:3004/employees')
    .then(response => response.json())
    .then(data => this.setState({employees: data}))
    .then(() => this.setState({isLoading: false}));
  }

  employeeDelete(userId){
    this.setState({deleteId: userId})
    fetch('http://localhost:3004/employees/'+userId,{
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({id: userId})
    })
    .then(this.setState({deleteId: ''}));
    this.employeesGet();
  }

  handleClickCancel(){
    console.log('Cancel button clicked');
    this.setState({isAdding : false});
  }

  reload(){
    console.log('Update after add');
    this.employeesGet();
  }

  render(){
    return(
      <div>
        <div>
          {this.state.isAdding ? <Form 
                                    handlerCancel={this.handleClickCancel}
                                    handlerReload={this.reload}
                                  />
            :  <button onClick={() => this.setState({isAdding: true})}>Add employee</button>}
        </div>
        <div>
          {this.state.isLoading ? <label>Loading...</label> :
            <div>
              <p>Data loaded: {this.state.employees.length}</p>
              <br/>
              <EmployeesList 
                employees={this.state.employees} 
                handlerDelete={this.employeeDelete}
                deleteId={this.state.deleteId}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default App