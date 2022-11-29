import React from 'react';
import { RiPlayFill } from 'react-icons/ri';

const MiniPlayer = () => {
	return <div className='w-full p-1'>
		<div className='w-full h-16 p-2 bg-[#E39667] flex items-center justify-between rounded-md shadow'>
			<div className='h-full flex items-center'>
				<figure className='h-full aspect-square bg-[#F9D2C2] rounded mr-2'></figure>
				<div>
					<h4 className='font-bold'>Temores Infundados</h4>
					<p className='text-sm leading-none'>Taller 1</p>
				</div>
			</div>
			<button className='pr-2'>
				<RiPlayFill size={32} />
			</button>
		</div>
	</div>;
};

export default MiniPlayer;
