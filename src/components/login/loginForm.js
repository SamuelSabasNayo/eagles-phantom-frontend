import React from 'react';
import validateInput from '../../validations/login';
import TextFieldGroup from './inputField';

class loginForm extends React.Component {
    constructor(propos){
        super(propos);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }
    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if(!isValid){
            this.setState( {errors});
        }
        return isValid;
    }
    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){

        }
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }
    render(){
        const { errors, identifier, password, isLoading} = this.state;
        return (
            <form onSubmit ={ this.onSubmit}>
                <h1>Login</h1>
                <TextFieldGroup field= "identifier" label="Username" value={identifier} errors={errors.identifier} onChange={this.onChange} />
                <TextFieldGroup field= "password" label="password" value={password} errors={errors.password} onChange={this.onChange} type="password" />
                <button disabled={isLoading}> Login</button>
            </form>
        )
        
    }
}

export default loginForm;
