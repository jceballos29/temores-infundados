/** @format */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AudioPlayer, Footer, Header } from './components';
import { setCurrentAudio } from './redux/features/audioPlayer';
import { playlist } from './utils/playlist';

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		const audio = playlist.find( audio => audio.head)
		dispatch(setCurrentAudio(audio))
	}, [])
	

	return (
		<div className='w-full h-full relative p-5'>
			<Header />
			<div className='w-full pt-10 space-y-1'>
				{playlist.map((item) => (
					<div
						key={item.id}
						onClick={() => dispatch(setCurrentAudio(item))}
						className='w-ful h-16 bg-[#E39667] rounded-md flex p-2 hover:bg-[#E39667]/50'
					>
						<figure className='h-full aspect-square bg-[#F9D2C2] rounded mr-2 overflow-hidden'>
							<img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
						</figure>
						<div>
							<h4 className='font-bold'>{item.title}</h4>
							<p className='text-sm leading-none'>{item.subtitle}</p>
						</div>
					</div>
				))}
			</div>
			<AudioPlayer />
			<Footer />
		</div>
	);
}

export default App;
