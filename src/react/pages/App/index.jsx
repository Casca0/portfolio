import React from 'react';
import './style.scss';

import Home from '@containers/Home';
import About from '@containers/About';
import Projects from '@containers/Projects';
import Contacts from '@containers/Contacts';

function App () {

	return (
		<div className="App">
			<div className="l-main">
				<Home />
				<About />
				<Projects />
				<Contacts />
			</div>
		</div>

	);
}

export default App;
