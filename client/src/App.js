import './style/App.scss'
import Page from './components/Page'
import Details from './components/Details'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Page />
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
