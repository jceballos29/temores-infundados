/** @format */

import React from 'react';
import { Menu, MiniPlayer } from './components';

const Footer = () => {
	return (
		<div className='fixed w-full bottom-0 left-0'>
			<MiniPlayer />
			<Menu />
		</div>
	);
};

export default Footer;
