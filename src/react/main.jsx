import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import App from '~/src/react/pages/App/index.jsx';
import Header from '~/src/react/containers/Header/index.jsx';
import Footer from '~/src/react/containers/Footer/index.jsx';

function react() {

	const container = document.getElementById('root');
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<Header />
			<App />
			<Footer />
		</React.StrictMode>,
	);
}

export default react;
