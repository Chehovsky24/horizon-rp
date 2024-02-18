import React from 'react';
import './assets/styles/app.scss';
import AuthMain from './components/authorization/Authorization';
import DeathMain from './components/death/Death';

function App() {
	return (
		<React.Fragment>
			<div>
				<AuthMain />
				<DeathMain />
			</div>
		</React.Fragment>
	)
}

export default App;