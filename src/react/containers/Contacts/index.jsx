import React from 'react';
import './style.scss';

import GitHubIcon from '~/src/react/assets/github.svg';
import GmailIcon from '~/src/react/assets/gmail.svg';
import WhatsAppIcon from '~/src/react/assets/whatsapp.svg';
import LinkedinIcon from '~/src/react/assets/linkedin.svg';

function Contacts() {
	return (
		<div className="l-contacts" id="contacts">
			<section>
				<h1>Contatos</h1>
				<p id='l-description'>Uma lista das minhas redes sociais e contatos.</p>
			</section>
			<div className="l-contacts__content">
				<a target="_blank" href="https://github.com/Casca0" className="l-contacts__link" id="github" rel="noreferrer">
					<GitHubIcon className='l-contactIcon'/>
					<p>GitHub</p>
				</a>
				<a href="mailto:lucashborzani@gmail.com" className="l-contacts__link" id="gmail">
					<GmailIcon className='l-contactIcon'/>
					<p>GMail</p>
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/lucas-borzani-a56770189/" className="l-contacts__link" id="linkedin" rel="noreferrer">
					<LinkedinIcon className='l-contactIcon'/>
					<p>LinkedIn</p>
				</a>
				<a target="_blank" href="https://api.whatsapp.com/send/?phone=55011933357417&text=Ol%C3%A1%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!" className="l-contacts__link" id="whatsapp" rel="noreferrer">
					<WhatsAppIcon className='l-contactIcon'/>
					<p>WhatsApp</p>
				</a>
			</div>
		</div>
	);
}

export default Contacts;
