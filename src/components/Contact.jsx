import React from 'react';
import HeadingSide from './HeadingSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
	faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/contact.css';

const Contact = () => {
	return (
		<section className="contact">
			<div className="container">
				<div className="item-content d-flex">
					<HeadingSide heading="contact" />
					<div className="content-left">
						<img src="/images/contact-bg.jpg" alt="" className="img-fluid" />
					</div>
					<div className="content-right d-flex justify-content-center flex-column">
						<div className="info d-flex align-items-center">
							<span>
								<FontAwesomeIcon icon={faMapMarkerAlt} />
							</span>
							<p>401 Broadway, 24th Floor, NY 10013.</p>
						</div>

						<div className="info d-flex align-items-center">
							<span>
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							<p>example@gmail.com</p>
						</div>

						<div className="info d-flex align-items-center">
							<span>
								<FontAwesomeIcon icon={faPhone} />
							</span>
							<p>+123 456 7890</p>
						</div>

						<form className="d-flex flex-column">
							<input type="text" placeholder="* YOUR NAME" />
							<input type="text" placeholder="* YOUR EMAIL" />
							<input type="text" placeholder="* WHAT ARE YOU INTERSTED IN?" />
							<textarea
								cols="30"
								rows="10"
								placeholder="YOUR MESSAGE"
							></textarea>
							<button className="btn d-flex align-items-center justify-content-center">
								<span>Submit</span>
								<span>
									<FontAwesomeIcon icon={faLongArrowAltRight} />
								</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
