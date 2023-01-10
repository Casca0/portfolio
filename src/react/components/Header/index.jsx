import React from 'react';
import './style.scss';

function Header() {
	return (
		<header className='l-header'>
			<h1 className='l-header__title'>
				Portfólio
			</h1>
			<nav className='l-header__nav'>
				<ul>
					<li>
						<a href="#home" target="_blank" rel="noopener noreferrer">Home</a>
					</li>
					<li>
						<a href="#about" target="_blank" rel="noopener noreferrer">Sobre</a>
					</li>
					<li>
						<a href="#" target="_blank" rel="noopener noreferrer">Projetos</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
