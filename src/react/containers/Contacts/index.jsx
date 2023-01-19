import React from 'react';
import './style.scss';

import gitHubIcon from '@assets/github.svg';
import gmailIcon from '@assets/gmail.svg';
import whatsAppIcon from '@assets/whatsapp.svg';
import linkedinIcon from '@assets/linkedin.svg';

function Contacts() {
	return (
		<div className="l-contacts" id="contacts">
			<section>
				<h1>Contatos</h1>
				<p>Uma lista das minhas redes sociais e contatos.</p>
			</section>
			<div className="l-contacts__content">
				<a target="_blank" href="https://github.com/Casca0" className="l-contacts__link" id="github" rel="noreferrer">
					<img src={gitHubIcon} alt="GitHub" title="GitHub" />
					<p>GitHub</p>
				</a>
				<a href="mailto:lucashborzani@gmail.com" className="l-contacts__link" id="gmail">
					<img src={gmailIcon} alt="GitHub" title="GitHub" />
					<p>GMail</p>
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/lucas-borzani-a56770189/" className="l-contacts__link" id="linkedin" rel="noreferrer">
					<img src={linkedinIcon} alt="GitHub" title="GitHub" />
					<p>LinkedIn</p>
				</a>
				<a target="_blank" href="https://api.whatsapp.com/send/?phone=55011933357417&text=Ol%C3%A1%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!" className="l-contacts__link" id="whatsapp" rel="noreferrer">
					<img src={whatsAppIcon} alt="GitHub" title="GitHub" />
					<p>WhatsApp</p>
				</a>
			</div>
		</div>
	);
}

export default Contacts;
