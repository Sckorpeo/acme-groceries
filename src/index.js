import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import Nav from './Nav';
import store from './store';
import Groceries from './Groceries';
import CreateForm from './CreateForm';
import { bootstrap } from './api-calls';



class _App extends Component {
	componentDidMount() {
		this.props.bootstrap();
		window.addEventListener('hashchange', () => {
			this.props.setView(window.location.hash.slice(1));
		})
		this.props.setView(window.location.hash.slice(1));
	}
	render() {
		const { groceries, view } = this.props;
		return (
			<div>
				<h1>Acme Groceries</h1>
				<Nav />
				<CreateForm />
				<Groceries />
			</div>
		);
	}
}

const App = connect(
	state => state,
	(dispatch) => {
		return {
			setView: (view) => dispatch({ type: 'SET_VIEW', view }),
			bootstrap: () => {
				dispatch(bootstrap());
			}
		}
	}
)(_App);


render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
