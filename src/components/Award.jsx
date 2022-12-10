import React from 'react';
import HeadingSide from './HeadingSide';
import { award } from '../dummydata';

import '../styles/award.css';

const Award = () => {
	return (
		<section className="award mb-2">
			<div className="container">
				{award.map((data, index) => {
					const { title, desc, cover, img1, img2, img3, img4 } = data;
					return (
						<div
							className="item-content d-flex  align-items-center"
							key={index}
						>
							<HeadingSide heading="award" />
							<div className="content-left d-flex  align-items-center justify-content-center flex-column">
								<div className="info">
									<h2>{title}</h2>
									<p>{desc}</p>
									<div className="image d-flex flex-wrap justify-space-between align-items-center">
										<div>
											<img src={img1} alt="" className="ing-fluid" />
										</div>

										<div>
											<img src={img2} alt="" className="ing-fluid" />
										</div>

										<div>
											<img src={img3} alt="" className="ing-fluid" />
										</div>

										<div>
											<img src={img4} alt="" className="ing-fluid" />
										</div>
									</div>
								</div>
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

export default Award;
