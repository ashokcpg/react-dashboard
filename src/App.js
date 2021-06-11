import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
	return (
		<Router>
			<Topbar />
			<div className='container'>
				<Sidebar />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/users'>
						<UserList />
					</Route>
					<Route path='/user/:userId'>
						<User />
					</Route>
					<Route path='/newUser'>
						<NewUser />
					</Route>
					<Route path='/products'>
						<ProductList />
					</Route>
					<Route path='/product/:productsId'>
						<ProductList />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default App;
