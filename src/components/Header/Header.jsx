/** @format */

import React from 'react';
import './styles/Header.css';
import {
	RiFacebookCircleFill,
	RiInstagramLine,
	RiYoutubeFill,
} from 'react-icons/ri';

import logo from '../../assets/img/logo.png';

const Header = () => {
	return (
			<ul className='w-full flex items-center justify-center space-x-6'>
				<li>
					<a href='/'>
						<RiYoutubeFill size={24} />
					</a>
				</li>

				<li>
					<a href='/'>
						<RiFacebookCircleFill size={24} />
					</a>
				</li>
				<li>
					<a href='/'>
						<RiInstagramLine size={24} />
					</a>
				</li>
				<li>
					<a href='/'>
						<img src={logo} alt='Club La Maraña' />
					</a>
				</li>
			</ul>

	);
};

export default Header;
