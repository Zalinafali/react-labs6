import React from 'react'

class PageEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formAge: '',
            formName: '',
            formCompany: '',
            formEmail: '',

            isSaving: false
        }

        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
    }
    
      handleChangeForm(e){
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmitForm(e){
        this.setState({isSaving: true});
        fetch('http://localhost:3004/employees',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "id":"",
                "isActive": this.state.formIsActive,
                "age": this.state.formAge,
                "name": this.state.formName,
                "company": this.state.formCompany,
                "email": this.state.formEmail
            })
        }).then(() => this.setState({isSaving: false}));
      }

      handleClickCancel(){
        console.log('Cancel button clicked');
      }

    render(){
            const divStyle = {
                borderColor: 'blue',
                borderStyle: 'solid'
            };
    
            return(
                <div style={divStyle}>
                    {this.state.isSaving ? <label>Saving...</label> :
                        <div>
                            <label>isActive:</label>
                            <select name="formIsActive" onChange={this.handleChange} >
                                <option value="false">false</option>
                                <option value="true">true</option>
                            </select>
                            <br/>
                            <label>Age:</label>
                            <input type="text" name='formAge' value={this.state.formAge} onChange={this.handleChangeForm} />
                            <br/>
                            <label>Name:</label>
                            <input type="text" name='formName' value={this.state.formName} onChange={this.handleChangeForm} />
                            <br/>
                            <label>Company:</label>
                            <input type="text" name='formCompany' value={this.state.formCompany} onChange={this.handleChangeForm} />
                            <br/>
                            <label>email:</label>
                            <input type="text" name='formEmail' value={this.state.formEmail} onChange={this.handleChangeForm} />
                            <br/>
                            <button type='button' onClick={this.handleSubmitForm}>Submit</button>
                            <button type='button' onClick={this.handlerCancel}>Cancel</button>
                        </div>
                    }
                </div>
          )
    }

}

export default PageEmployee