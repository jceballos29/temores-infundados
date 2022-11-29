import React from 'react';
import { RiGalleryLine, RiHome4Line } from "react-icons/ri";

const Menu = () => {
	return <ul className='w-full py-3 flex items-center justify-evenly bg-black/50 '>
		<li className='flex flex-col items-center text-white'>
			<RiHome4Line size={24} />
			<span className='text-xs leading-none'>Inicio</span>
		</li>
		<li className='flex flex-col items-center text-white'>
			<RiGalleryLine size={24} />
			<span className='text-xs leading-none'>Galería</span>
		</li>
	</ul>;
};

export default Menu;
