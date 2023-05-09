import React from 'react';
import './style.scss';

import StarIcon from '~/src/react/assets/star.svg';

import GitHubIcon from '~/src/react/assets/github.svg';

function ProjectBox(props) {
	const repo = props.project;

	const avatarUrl = repo.owner ? repo.owner.avatar_url : '';

	console.log(repo);
	return (
		<div className='l-projectBox'>
			<section>
				<h2>{repo.full_name}</h2>
				<p>{repo.description}</p>
				<div className='l-projectBox__stars'>
					<div>
						{repo.stargazers_count}
						<StarIcon id='l-starIcon'/>
					</div>
					<a target='_blank' href={repo.html_url} rel="noreferrer">
						<GitHubIcon id='l-gitHubIcon'/>
					</a>
				</div>
			</section>
			<img src={avatarUrl} alt='Imagem do avatar do GitHub' title='Imagem do avatar do GitHub' />
		</div>
	);
}

export default ProjectBox;
