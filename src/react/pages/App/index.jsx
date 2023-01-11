import React from 'react';
import './style.scss';

import Home from '@containers/Home';
import About from '@containers/About';

function App () {

	return (
		<div className="App">
			<div className="l-main">
				<Home />
				<About />
			</div>
		</div>

	);
}

export default App;
