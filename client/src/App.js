import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Admin from './pages/Admin/Admin';
import Nav from "./components/Nav";
import Tasting from './pages/Tasting';
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import AUTH from './utils/AUTH';


class App extends Component {

	constructor() {
		super();

		this.state = {
			loggedIn: false,
			user: null
		};
	}

	componentDidMount() {
		AUTH.getUser().then(response => {
			console.log(response.data);
			if (response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	logout = (event) => {
		event.preventDefault();

		if (this.state.user.email === "Guest") {
			this.setState({
				user: null,
				loggedIn: false
			});
		}
		else {
			AUTH.logout().then(response => {
				console.log(response.data);
				if (response.status === 200) {
					this.setState({
						loggedIn: false,
						user: null
					});
				}
			});
		}

	}

	login = (email, password) => {
		AUTH.login(email, password).then(response => {
			console.log(response);
			if (response.status === 200) {
				// update the state
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			}
		});
	}

	setGuest = () => {
		this.setState({
			loggedIn: true,
			user: {
				firstName: "Guest",
				lastName: "Guest",
				email: "Guest"
			}
		});
	}

	render() {
		return (
			<div className="App">
				{this.state.loggedIn && (
					<div>
						<Nav user={this.state.user} logout={this.logout} />
						<div className="main-view">
							<Switch>
								<Route exact path="/" component={() => <Tasting user={this.state.user} />} />
								<Route exact path="/tasting" component={() => <Tasting user={this.state.user} />} />
								{/* <Route exact path="/trails/" component={(Detail)} />
								<Route exact path="/trails/:id" component={Detail} /> */}
								<Route component={NoMatch} />
							</Switch>
						</div>
					</div>
				)}
				
				{this.state.loggedIn && (
					<div>
						<Nav user={this.state.user} logout={this.logout} />
						<div className="main-view">
							<Switch>
								<Route exact path="/" component={() => <Admin user={this.state.user} />} />
								<Route exact path="/admin" component={() => <Admin user={this.state.user} />} />
								{/* <Route exact path="/trails/" component={(Detail)} />
								<Route exact path="/trails/:id" component={Detail} /> */}
								<Route component={NoMatch} />
							</Switch>
						</div>
					</div>
				)}

				{!this.state.loggedIn && (
					<div className="auth-wrapper" style={{ paddingTop: 40 }}>
						<Route exact path="/" component={() => <LoginForm login={this.login} setGuest={this.setGuest} />} />
						<Route exact path="/tasting" component={() => <LoginForm user={this.login} />} />
						{/* <Route exact path="/weather" component={() => <LoginForm user={this.login}/>} /> */}
						<Route exact path="/signup" component={SignupForm} />
					</div>
				)}
			</div>
		)
	}
}

export default App;
