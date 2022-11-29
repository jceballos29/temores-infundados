/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
	RiArrowDownSLine,
	RiPauseFill,
	RiPlayFill,
	RiSkipBackFill,
	RiSkipForwardFill,
} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
	closeAudioPlayer,
	pauseAudio,
	playAudio,
	setCurrentAudio,
} from '../../redux/features/audioPlayer';
import { playlist } from '../../utils/playlist';

const AudioPlayer = () => {
	const { show, isPlaying, currentAudio } = useSelector(
		(state) => state.audioPlayer,
	);
	const dispatch = useDispatch();
	const [currentProgress, setCurrentProgress] = useState(0);
	const trackProgressStyling = `linear-gradient(to right, #0F4139 ${currentProgress}%, #F9D2C288 ${currentProgress}%)`;

	const nextAudio = () => {
		const next = playlist.find( audio => audio.id === currentAudio.next)
		dispatch(setCurrentAudio(next))
	}

	const prevAudio = () => {
		const prev = playlist.find( audio => audio.id === currentAudio.prev)
		dispatch(setCurrentAudio(prev))
	}
	
	return (
		<div
			className={`fixed top-0 left-0 w-screen h-screen z-20 bg-[#E39667]/50 backdrop-blur-md transform transition-transform duration-200 ${
				show ? 'translate-y-0' : 'translate-y-full'
			}`}
		>
			<header
				onClick={() => dispatch(closeAudioPlayer())}
				className='relative w-full h-11 p-2 flex flex-col items-center justify-center'
			>
				<h2 className='font-bold text-lg text-center'>
					Temores Infundados
				</h2>
				<span className='absolute left-4 '>
					<RiArrowDownSLine size={32} />
				</span>
			</header>
			<div className='w-full h-[calc(100vh-44px)] px-6 flex flex-col justify-evenly'>
				<figure className='w-full aspect-square bg-[#F9D2C2] rounded-md shadow-md overflow-hidden'>
					<img
						src={currentAudio?.image}
						alt={currentAudio?.title}
						className='w-full h-full object-cover'
					/>
				</figure>
				<div className='w-full'>
					<div>
						<h3 className='font-bold text-xl'>{currentAudio?.title}</h3>
						<p className='font-light leading-none'>{currentAudio?.subtitle}</p>
					</div>
					<div className='w-full mt-4'>
						<input
							type='range'
							name='track-progress'
							id='tract-progress'
							min={0}
							step={1}
							max={100}
							value={currentProgress}
							onChange={(e) => setCurrentProgress(e.target.value)}
							className='w-full appearance-none h-1 rounded-full'
							style={{ background: trackProgressStyling }}
						/>
						<div className='w-full flex items-center justify-between text-xs font-light italic'>
							<span>1:00</span>
							<span>4:25</span>
						</div>
						<div className='w-full flex items-center justify-center space-x-4 mt-2'>
							<button
								onClick={() => prevAudio()}
							>
								<RiSkipBackFill size={32} />
							</button>
							{isPlaying && (
								<button
									onClick={() => dispatch(dispatch(pauseAudio()))}
									className='w-20 h-20 rounded-full flex items-center shadow justify-center bg-[#F9D2C2]'
								>
									<RiPauseFill size={32} />
								</button>
							)}
							{!isPlaying && (
								<button
									onClick={() => dispatch(dispatch(playAudio()))}
									className='w-20 h-20 rounded-full flex items-center shadow justify-center bg-[#F9D2C2]'
								>
									<RiPlayFill size={32} />
								</button>
							)}
							<button
								onClick={() => nextAudio()}
							>
								<RiSkipForwardFill size={32} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;
