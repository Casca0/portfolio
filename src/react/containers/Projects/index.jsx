import React, { useState, useEffect } from 'react';
import './style.scss';

import { Octokit } from '@octokit/core';

import ProjectBox from '~/src/react/components/ProjectBox';

import GitHubIcon from '~/src/react/assets/github.svg';
import GmailIcon from '~/src/react/assets/gmail.svg';
import WhatsAppIcon from '~/src/react/assets/whatsapp.svg';
import LinkedinIcon from '~/src/react/assets/linkedin.svg';

function Projects() {
	const [repos, setRepos] = useState([{}]);

	useEffect(() => {
		async function getRepos() {
			try {
				const octokit = new Octokit({
					auth: process.env.GITHUB_APY_KEY,
				});
	
				const res = await	octokit.request('GET /users/{username}/repos', {
					username: 'Casca0',
					type: 'owner',
					sort: 'created'
				});
	
				setRepos(res.data);
			}
			catch (e) {
				console.log(`Deu ruim: ${e}`);
			}
		}
		if (repos.length <= 1) {
			getRepos();
		}

		return;
	}, [setRepos]);

	return (
		<div className='l-projects' id='projects'>
			<section>
				<h1>Projetos</h1>
				<p id='l-description'>Coleção dos meus projetos e mídias sociais!</p>
			</section>
			<div className="l-projects__main">
				<div className="l-projects__content">
					{repos.flat().map((item, index) => {
						return (
							<ProjectBox project={item} key={index++}/>
						);
					})}
				</div>
				<div className="l-projects__contacts">
					<a target="_blank" href="https://github.com/Casca0" className="l-projects__contact-link" id="github" rel="noreferrer">
						<GitHubIcon className='l-contactIcon'/>
						<p>GitHub</p>
					</a>
					<a href="mailto:lucashborzani@gmail.com" className="l-projects__contact-link" id="gmail">
						<GmailIcon className='l-contactIcon'/>
						<p>GMail</p>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/lucas-borzani-a56770189/" className="l-projects__contact-link" id="linkedin" rel="noreferrer">
						<LinkedinIcon className='l-contactIcon'/>
						<p>LinkedIn</p>
					</a>
					<a target="_blank" href="https://api.whatsapp.com/send/?phone=55011933357417&text=Ol%C3%A1%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!" className="l-projects__contact-link" id="whatsapp" rel="noreferrer">
						<WhatsAppIcon className='l-contactIcon'/>
						<p>WhatsApp</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
