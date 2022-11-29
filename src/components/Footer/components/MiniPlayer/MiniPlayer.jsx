/** @format */

import React from 'react';
import { RiPauseFill, RiPlayFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
	openAudioPlayer,
	pauseAudio,
	playAudio,
} from '../../../../redux/features/audioPlayer';

const MiniPlayer = () => {
	const { show, isPlaying, currentAudio } = useSelector(
		(state) => state.audioPlayer,
	);
	const dispatch = useDispatch();

	return (
		<div className='w-full p-1'>
			<div className='relative w-full h-16 p-2 bg-[#E39667] flex items-center justify-between rounded-md shadow'>
				<div
					onClick={() => dispatch(openAudioPlayer())}
					className='h-full w-full flex items-center'
				>
					<figure className='h-full aspect-square bg-[#F9D2C2] rounded mr-2 overflow-hidden'>
						<img src={currentAudio?.image} alt={currentAudio?.title} className='w-full h-full object-cover' />
					</figure>
					<div>
						<h4 className='font-bold'>{currentAudio?.title}</h4>
						<p className='text-sm leading-none'>{currentAudio?.subtitle}</p>
					</div>
				</div>
				{isPlaying && (
					<button
						onClick={() => dispatch(dispatch(pauseAudio()))}
						className='relative z-10 pr-2'
					>
						<RiPauseFill size={32} />
					</button>
				)}
				{!isPlaying && (
					<button
						onClick={() => dispatch(dispatch(playAudio()))}
						className='relative z-10 pr-2'
					>
						<RiPlayFill size={32} />
					</button>
				)}
			</div>
		</div>
	);
};

export default MiniPlayer;
