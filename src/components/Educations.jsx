import React from 'react';
import HeadingSide from './HeadingSide';
import { education } from '../dummydata';

import '../styles/education.css';

const Educations = () => {
	return (
		<section className="education mb-2">
			<div className="container">
				<div className="item-content d-flex">
					<HeadingSide heading="educations" />
					<div className="content-left">
						<img src="/images/education-bg.jpg" alt="" className="img-fluid" />
					</div>
					<div className="content-right d-flex justify-content-center flex-column">
						<p className="mb-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Architecto, ab, atque! Quibusdam adipisci non a esse natus eos
							eum, id vel. Tenetur optio ullam corporis, mollitia quod rerum,
							esse? Ad.
						</p>
						{education.map((data) => {
							const { id, name, program, year } = data;
							return (
								<div className="box d-flex align-items-center" key={id}>
									<span>{id}.</span>
									<div className="info">
										<h5>{name}</h5>
										<p>{program}</p>
										<span>{year}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Educations;
