import React from 'react';
import HeadingSide from './HeadingSide';
import { creative } from '../dummydata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faQuoteLeft,
	faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/creative.css';

const Creative = () => {
	return (
		<section className="creative mb-2">
			<div className="container">
				{creative.map((data, index) => {
					const { heading, title, desc, cover } = data;
					return (
						<div className="item-content d-flex" key={index}>
							<HeadingSide heading="creative" />
							<div className="content-left d-flex justify-content-center flex-column">
								<span>
									<FontAwesomeIcon icon={faQuoteLeft} />
								</span>
								<h3>{heading}</h3>
								<span>{title}</span>
								<p>{desc}</p>
								<button className="btn d-flex align-items-center justify-content-center">
									<span>Download resume</span>
									<span>
										<FontAwesomeIcon icon={faLongArrowAltRight} />
									</span>
								</button>
							</div>
							<div className="content-right">
								<img src={cover} alt="" className="img-fluid" />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Creative;
