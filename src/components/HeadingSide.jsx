import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
const HeadingSide = ({ heading }) => {
	return (
		<div className="heading-side">
			<h2 className="d-flex align-items-center justify-content-center">
				<span>
					<FontAwesomeIcon icon={faMinus} />
				</span>
				{heading}
			</h2>
		</div>
	);
};

export default HeadingSide;
