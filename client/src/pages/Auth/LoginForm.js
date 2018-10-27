import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import { StarrlightBanner } from '../../components/Images/StarrlightBanner.png';
import './login.css';





class LoginForm extends Component {
	


	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			redirectTo: null
	
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {

		event.preventDefault();
		console.log(`Loggin in with: ${this.state.email} and ${this.state.password}`);
		this.props.login(this.state.email, this.state.password);
		this.setState({
			redirectTo: '/'
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<body>
				<Container>
					<Row>
						<Col size="md-3"></Col>
						<Col size="md-6">
							<Card title="Login">
								<form>
									<label htmlFor="email"><strong>Email: </strong></label>
									<Input
										type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
									<label htmlFor="password"><strong>Password: </strong></label>
									<Input
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
									<Link style= {{color: 'brown'}} to="/signup">Register</Link>
									<FormBtn onClick={this.handleSubmit}>Login</FormBtn>
								</form>
							</Card>
						</Col>
						<Col size="md-3"></Col>
					</Row>
				</Container>
				</body>
			)
		}
	}
}

export default LoginForm;
