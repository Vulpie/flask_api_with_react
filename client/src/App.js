import './style/App.scss'
import Store from './components/Store'
import Details from './components/Details'
import AdminHome from './components/Admin/AdminHome'
import AdminStore from './components/Admin/AdminStore'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/store" exact>
						<Store />
					</Route>
					<Route path="/:id" exact>
						<Details />
					</Route>
					<Route path="/admin/home" exact>
						<AdminHome />
					</Route>
					<Route path="/admin/manage/store" exact>
						<AdminStore />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
