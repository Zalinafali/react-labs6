import React from 'react'

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formIsActive: false,
            formAge: '',
            formName: '',
            formCompany: '',
            formEmail: '',

            isSaving: false
        }

        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
    
      handleChangeForm(e){
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmitForm(e){
       
      }

    render(){
        return(
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
                    <button type='button' onClick={this.props.handlerCancel}>Cancel</button>
            </div>
        )
    }
}

export default Form