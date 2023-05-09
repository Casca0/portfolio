import React from 'react';
import './style.scss';

import Home from '~/src/react/containers/Home/index.jsx';
import About from '~/src/react/containers/About/index.jsx';
import Projects from '~/src/react/containers/Projects/index.jsx';

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
