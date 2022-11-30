/** @format */

import React from 'react';
import {
	RiGalleryLine,
	RiHome4Line,
	RiPlayListLine,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<ul className='w-full py-3 flex items-center justify-evenly bg-black/50 '>
			<li>
				<NavLink
					to='/'
					end
					className='w-12 flex flex-col items-center text-white'
				>
					<RiHome4Line size={24} />
					<span className='text-xs leading-none'>Inicio</span>
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/gallery'
					end
					className='w-12 flex flex-col items-center text-white'
				>
					<RiGalleryLine size={24} />
					<span className='text-xs leading-none'>Galería</span>
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/podcast'
					end
					className='w-12 flex flex-col items-center text-white'
				>
					<RiPlayListLine size={24} />
					<span className='text-xs leading-none'>Podcast</span>
				</NavLink>
			</li>
		</ul>
	);
};

export default Menu;
