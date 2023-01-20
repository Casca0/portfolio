import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import App from '@pages/App/index.jsx';
import Header from '@containers/Header';
import Footer from '@containers/Footer';

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
