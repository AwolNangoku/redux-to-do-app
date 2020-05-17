import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ConnectedTodosPage from '../../containers/ConnectedTodosPage/'

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/'>
				<ConnectedTodosPage />
			</Route>
		</Switch>
	</Router>
	)

export default App;