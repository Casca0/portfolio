import React from 'react';
import './style.scss';

import Home from '@containers/Home';
import About from '@containers/About';
import Projects from '@containers/Projects';

function App () {

	return (
		<div className="App">
			<div className="l-main">
				<Home />
				<About />
				<Projects />
			</div>
		</div>

	);
}

export default App;
