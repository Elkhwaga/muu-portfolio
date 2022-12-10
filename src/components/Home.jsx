import React from 'react';
import Slider from 'react-slick';
import { homedata } from '../dummydata';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/home.css';

const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<section className="home mb-2">
			<div className="container">
				<Slider {...settings}>
					{homedata.map((item) => {
						const { id, name, desc, cover, signature } = item;
						return (
							<div className="item-content d-flex  align-items-center" key={id}>
								<div className="left">
									<h2>{name}</h2>
									<p>{desc}</p>
									<img src={signature} alt="" />
								</div>

								<div className="right">
									<img src={cover} alt="" />
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default Home;
