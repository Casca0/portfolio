import React from 'react';
import './style.scss';

import profilePic from '@assets/profilePic.webp';
import curriculum from '@assets/curriculum.pdf';

function Home() {
	const todayDate = new Date();

	const yearsOld = todayDate.getFullYear() - 2001;

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
				<p>&#10024; {yearsOld - 1}y</p>
				<p>&#x1F468;&#x1F3FC;&#x200D;&#x1F4BB; Desenvolvedor Front-end</p>
				<p>&#127952; Atleta</p>
				<a target="_blank" href={curriculum} download="CV-Lucas-Henrique-Borzani.pdf" className="l-home__curriculum" rel="noreferrer">Baixar Currículo</a>
			</div>
		</div>
	);
}

export default Home;
