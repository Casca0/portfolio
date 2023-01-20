import React from 'react';
import './style.scss';

import { projects } from './projects.json';

import ProjectBox from '@components/ProjectBox';

function Projects() {
	return (
		<div className='l-projects' id='projects'>
			<section>
				<h1>Projetos</h1>
				<p>Coleção dos meus projetos!</p>
			</section>
			<div className="l-projects__content">
				{projects.flat().map((item) => {
					return (
						<ProjectBox project={item} key={item.id}/>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
