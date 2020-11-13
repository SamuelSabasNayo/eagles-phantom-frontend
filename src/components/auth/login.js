import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        const { email, password } = this.state;

        axios.post("http://localhost:3020/sessions",
        {
            user: {
                email: email,
                password: password
            }
        },
        {withCredentials: true}
        )
        .then(res => {
            if (res.data.logged_in) {
                this.props.handleSuccessfulAuth(res.data);
            }
        })
        .catch(error => {
            console.log(error.message)
        });
    }
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
    
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
    
              <button type="submit">Login</button>
            </form>
          </div>
        );
      }
}

export default Login;