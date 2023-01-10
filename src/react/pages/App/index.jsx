import React from 'react';
import './style.scss';

import Header from '@components/Header';
import Home from '@containers/Home';

function App () {

	return (
		<div className="App">
			<Header />
			<div className="l-main">
				<Home />
			</div>
		</div>
	);
}

export default App;
