import React from 'react';
import HeadingSide from './HeadingSide';
import { blog } from '../dummydata';

import '../styles/blog.css';

const Blog = () => {
	return (
		<section className="blog mb-2">
			<div className="container">
				<div className="item-content d-flex align-items-center">
					<HeadingSide heading="Blog" />
					<div className="box d-flex flex-wrap">
						{blog.map((item, index) => (
							<div key={index}>
								<img src={item.cover} alt="" className="img-fluid" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
