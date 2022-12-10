import React from 'react';
import { about } from '../dummydata';
import HeadingSide from './HeadingSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/about.css';

const About = () => {
	return (
		<section className="about mb-2">
			<div className="container">
				{about.map((data, index) => {
					const { name, email, phone, fax, dob, nation, heading, title, desc } =
						data;
					return (
						<div className="item-content d-flex" key={index}>
							<HeadingSide heading="about me" />
							<div className="content-left d-flex justify-content-center flex-column">
								<div className="details d-flex">
									<p>Name:</p>
									<p>{name}</p>
								</div>
								<div className="details d-flex">
									<p>Email:</p>
									<p>{email}</p>
								</div>
								<div className="details d-flex">
									<p>Phone:</p>
									<p>{phone}</p>
								</div>
								<div className="details d-flex">
									<p>Fax:</p>
									<p>{fax}</p>
								</div>
								<div className="details d-flex">
									<p>Date of birth:</p>
									<p>{dob}</p>
								</div>
								<div className="details d-flex">
									<p>Nationality:</p>
									<p>{nation}</p>
								</div>
								<button className="btn d-flex align-items-center justify-content-center">
									<span>Download resume</span>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
								</button>
							</div>
							<div className="content-right p-0">
								<h2>{heading}</h2>
								<div className="info">
									<span>Hello</span>
									<p>{title}</p>
									<p>{desc}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default About;
