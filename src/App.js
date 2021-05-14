import Profile from './components/Profile'
import UserList from './components/UserList'
// importamos el context 
import UserState from './context/User/UserState';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
	return (
		<UserState>
			<div className="container p-4">
				<div className="row">
					<div className="col-md-7">
						<UserList />
					</div>
					<div className="col-md-5">
						<Profile />
					</div>
				</div>
			</div>
		</UserState>
	);
}

export default App;
