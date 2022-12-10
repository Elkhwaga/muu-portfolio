import React from 'react';
import HeadingSide from './HeadingSide';
import { portfolio } from '../dummydata';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMinus,
	faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/portfolio.css';

const Portfolio = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<section className="portfolio mb-2">
			<div className="container">
				<Slider {...settings}>
					{portfolio.map((item) => {
						const { id, cover, title, desc, p1, p2, p3, p4, p5 } = item;
						return (
							<div className="item-content d-flex  align-items-center" key={id}>
								<HeadingSide heading="portfolio" />
								<div className="content-left">
									<img src={cover} alt="" className="img-fluid" />
								</div>

								<div className="content-right d-flex justify-content-center flex-column">
									<h2>{title}</h2>
									<p>{desc}</p>
									<ul>
										<li className="d-flex align-items-center">
											<span>
												<FontAwesomeIcon icon={faMinus} />
											</span>
											<p>{p1}</p>
										</li>

										<li className="d-flex align-items-center">
											<span>
												<FontAwesomeIcon icon={faMinus} />
											</span>
											<p>{p2}</p>
										</li>

										<li className="d-flex align-items-center">
											<span>
												<FontAwesomeIcon icon={faMinus} />
											</span>
											<p>{p3}</p>
										</li>

										<li className="d-flex align-items-center">
											<span>
												<FontAwesomeIcon icon={faMinus} />
											</span>
											<p>{p4}</p>
										</li>

										<li className="d-flex align-items-center">
											<span>
												<FontAwesomeIcon icon={faMinus} />
											</span>
											<p>{p5}</p>
										</li>
									</ul>
									<button className="btn d-flex align-items-center justify-content-center">
										<span>View Websit</span>
										<span>
											<FontAwesomeIcon icon={faLongArrowAltRight} />
										</span>
									</button>
								</div>
							</div>
						);
					})}
				</Slider>
				{/*<div className="item-content d-flex">
				</div>*/}
			</div>
		</section>
	);
};

export default Portfolio;
