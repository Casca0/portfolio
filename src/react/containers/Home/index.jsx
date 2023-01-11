import React from 'react';
import './style.scss';

import profilePic from '@assets/20220103_135309.jpg';

function Home() {
	return (
		<div className='l-home' id='home'>
			<section>
				<h1>Bem-vindo(a)!</h1>
				<p>Seja bem-vindo(a) ao meu portfólio, aqui vou manter uma coleção de todos os projetos que montei e trabalhei para que você possa explorá-los!</p>
			</section>
			<div className='l-home__content'>
				<figure>
					<img src={profilePic} alt='Uma foto minha' title='Uma foto minha' />
					<figcaption>Lucas Borzani</figcaption>
				</figure>
				<p>21y</p>
				<p>Desenvolvedor Front-end</p>
				<p>Atleta</p>
			</div>
		</div>
	);
}

export default Home;
