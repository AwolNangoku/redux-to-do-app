import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ConnectedTodosPage from '../../containers/ConnectedTodosPage/'
import TodoPage from '../../components/app/pages/TodoPage/';


const App = () => (
	<Router>
		<Switch>
			<Route exact path='/'>
				<ConnectedTodosPage />
			</Route>
			<Route exact path='/todo/:todo'>
				<TodoPage />
			</Route>
		</Switch>
	</Router>
	)

export default App;