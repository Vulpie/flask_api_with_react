import './style/App.scss'
import HomePage from './components/HomePage'
import Details from './components/Details'
import AdminHome from './components/Admin/AdminHome'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/:id" exact>
						<Details />
					</Route>
					<Route path="/admin/home" exact>
						<AdminHome />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
