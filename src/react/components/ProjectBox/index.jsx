/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import './style.scss';

import DiscordIcon from '@assets/discord-icon-svgrepo-com.webp';
import ProgrammingIcon from '@assets/programming-code-svgrepo-com.webp';

function ProjectBox(props) {
	return (
		<div className='l-projectbox'>
			<figure>
				<img src={props.project.imageType == 'discord' ? DiscordIcon : ProgrammingIcon} alt='Imagem do projeto' title='Imagem do projeto' />
				<figcaption><a target="_blank" href={props.project.projectUrl}>{props.project.name}</a></figcaption>
			</figure>
			<section>
				<h3>Descrição</h3>
				<p>{props.project.description}</p>
			</section>
		</div>
	);
}

export default ProjectBox;
