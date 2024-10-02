import React from 'react';
import '../styles/CTAButton.css';

const CTAButton = ({ text, url }) => {
	const handleClick = () => {
		window.open(url, '_blank');
	};

	return (
		<button className='cta-button' onClick={handleClick}>
			{text}
		</button>
	);
};

export default CTAButton;
