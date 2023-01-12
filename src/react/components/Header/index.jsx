import React from 'react';
import './style.scss';

import { Link } from 'react-scroll';

function Header() {
	return (
		<header className='l-header'>
			<h1 className='l-header__title'>
				Portfólio
			</h1>
			<nav className='l-header__nav'>
				<ul>
					<li>
						<Link 
							activeClass='--active' 
							className='l-header__nav-link'
							to='home'
							href='#home'
							spy={true}
							smooth={true}
							offset={-110}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li>
						<Link 
							activeClass='--active' 
							className='l-header__nav-link'
							to='about'
							href='#about'
							spy={true}
							smooth={true}
							offset={-110}
							duration={500}
						>
							Sobre
						</Link>
					</li>
					<li>
						<Link 
							activeClass='--active' 
							className='l-header__nav-link'
							to='projects'
							href='#projects'
							spy={true}
							smooth={true}
							offset={-110}
							duration={500}
						>
							Projetos
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
