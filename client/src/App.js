import './style/App.scss'
import Store from './components/Public/Store'
import Details from './components/Public/Details'
import AdminIndex from './components/Admin/AdminIndex'
import AdminStore from './components/Admin/AdminStore'
import AdminHome from './components/Admin/AdminHome'
import Home from './components/Public/Home'
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
					<Route path="/admin/index" exact>
						<AdminIndex />
					</Route>
					<Route path="/admin/manage/store" exact>
						<AdminStore />
					</Route>
					<Route path="/admin/manage/home" exact>
						<AdminHome />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
