import React from 'react';
import HeadingSide from './HeadingSide';
import { work } from '../dummydata';

import '../styles/work.css';

const Work = () => {
	return (
		<section className="work mb-2">
			<div className="container">
				<div className="item-content d-flex">
					<HeadingSide heading="empolye" />
					<div className="content-left d-flex justify-content-center flex-column">
						{work.map((data, index) => {
							const { years, compnay, desc } = data;
							return (
								<div className="box d-flex align-items-center" key={index}>
									<span>{years}</span>
									<div className="info">
										<h3>{compnay}</h3>
										<p>{desc}</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className="content-right">
						<img src="/images/employment-bg.jpg" alt="" className="img-fluid" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
