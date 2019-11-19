import React from 'react'

function Employee(props){
    const divStyle ={
        borderColor: 'black',
        borderStyle: 'solid'
    }
    return(
        <div>
            {props.deleteId === props.data.id ? <label style={divStyle}>Deleting...</label> :
                <div style={divStyle}>
                    <p>id: {props.data.id}</p>
                    <p>isActive: {props.data.isActive.toString()}</p>
                    <p>age: {props.data.age}</p>
                    <p>name: {props.data.name}</p>
                    <p>company: {props.data.company}</p>
                    <p>email: {props.data.email}</p>
                    <button onClick={() => {props.handlerDelete(props.data.id)}}>Delete</button>
                </div>
            }
            <br/>
        </div>
    )
}

export default Employee