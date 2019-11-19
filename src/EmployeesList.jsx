import React from 'react'
import Employee from './Employee'

function EmployeesList(props){
    const employeesList = props.employees.map(employeeData =>
        <Employee 
            key={employeeData.id} 
            data={employeeData} 
            handlerDelete={props.handlerDelete}
            deleteId={props.deleteId}
        />)
    return(
        <div>
            {employeesList}
        </div>
    )
}

export default EmployeesList