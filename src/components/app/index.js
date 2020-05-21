import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ConnectedTodosPage from '../../containers/ConnectedTodosPage/'
import ConnectedTodoPage from '../../containers/ConnectedTodoPage/';


const App = () => (
	<Router>
		<Switch>
			<Route exact path='/'>
				<ConnectedTodosPage />
			</Route>
			<Route exact path='/todo/:id'>
				<ConnectedTodoPage />
			</Route>
		</Switch>
	</Router>
	)

export default App;