import './style/App.scss'
import HomePage from './components/HomePage'
import Details from './components/Details'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/:id">
						<Details />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
