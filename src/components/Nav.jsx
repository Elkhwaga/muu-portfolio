import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/nav.css';

const Nav = () => {
	const [sidebar, setSidebar] = useState(false);
	return (
		<header>
			<div className="container d-flex align-items-center justify-space-between">
				<div className="logo">
					<h1>
						. <span>m</span>uu
					</h1>
				</div>
				<nav>
					<button className="toggle" onClick={() => setSidebar(!sidebar)}>
						{sidebar ? (
							<FontAwesomeIcon icon={faTimes} />
						) : (
							<FontAwesomeIcon icon={faBars} />
						)}
					</button>
					<ul
						className={sidebar ? 'nav-links-sidebar' : 'nav-links'}
						onClick={() => setSidebar(false)}
					>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Creatives</a>
						</li>
						<li>
							<a href="/">Educations</a>
						</li>
						<li>
							<a href="/">Works</a>
						</li>
						<li>
							<a href="/">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Nav;
