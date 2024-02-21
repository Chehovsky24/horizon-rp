import React from 'react';
import './assets/styles/app.scss';
import AuthMain from './components/authorization/Authorization';
import DeathMain from './components/death/Death';
import Notifications from './components/notifications/Notifications';

function App() {
	return (
		<React.Fragment>
			<div>
				<AuthMain />
				<DeathMain />
				<Notifications />
			</div>
		</React.Fragment>
	)
}

export default App;