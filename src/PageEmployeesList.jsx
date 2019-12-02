import React from 'react'

import{
    Link
} from "react-router-dom"

import EmployeesList from './EmployeesList'

class PageEmployeesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees: null,
            isLoading: true,
            deleteId: ''
        }

        this.employeeDelete = this.employeeDelete.bind(this);
        this.employeesGet = this.employeesGet.bind(this);
        this.reload = this.reload.bind(this);
    }

    componentDidMount() {
        this.employeesGet();
    }

    employeesGet(){
        this.setState({isLoading: true})
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
        .then(this.setState({deleteId: ''}))
        .then(this.employeesGet);
    }

    reload(){
        console.log('Update after add');
        this.employeesGet();
    }

    render(){
        return(
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
                        <br/>
                        <Link to="/new"><button>Create new employee</button></Link>
                    </div>
                }
            </div>
        )
    }

}

export default PageEmployeesList