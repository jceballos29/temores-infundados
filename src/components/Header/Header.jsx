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
				<a href='https://youtube.com/@clublamarana8585'>
					<RiYoutubeFill size={24} />
				</a>
			</li>

			<li>
				<a href='https://m.facebook.com/club.lamarana/?tsid=0.34415809347592896&source=result'>
					<RiFacebookCircleFill size={24} />
				</a>
			</li>
			<li>
				<a href='https://instagram.com/club.lamarana?igshid=ZmVmZTY5ZGE='>
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
