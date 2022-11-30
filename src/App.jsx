/** @format */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AudioPlayer, Footer, Header } from './components';
import {
	playAudio,
	setCurrentAudio,
} from './redux/features/audioPlayer';
import { playlist } from './utils/playlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import gallery from './utils/gallery';
import temoresInfundados from './assets/img/temores-infundados.png'

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const audio = playlist.find((audio) => audio.head);
		dispatch(setCurrentAudio(audio));
	}, []);

	const viewImage = (image) => {
		console.log(image)
	}

	return (
		<BrowserRouter>
			<div className='w-full h-screen relative pb-28 overflow-hidden'>
				<Routes>
					<Route
						path='/'
						element={
							<div className='w-full h-full flex flex-col justify-between p-5'>
								<Header />
								<img src={temoresInfundados} alt="" />
							</div>
						}
					/>
					<Route
						path='/gallery'
						element={
							<div className='w-full h-full p-5 overflow-y-auto'>
								<h2 className='text-xl font-bold'>Galería</h2>
								<div className='pt-10'>
									<ResponsiveMasonry
										columnsCountBreakPoints={{
											350: 2,
											750: 3,
											900: 4,
										}}
									>
										<Masonry gutter='5px'>
											{gallery.map((item) => (
												<img
													key={item.id}
													src={`https://storage.googleapis.com/temores-infundados/gallery/${item.title}.jpg`}
													className='block w-full rounded cursor-pointer'
													alt={item.title}
													onClick={() => viewImage(item)}
												/>
											))}
										</Masonry>
									</ResponsiveMasonry>
								</div>
							</div>
						}
					/>
					<Route
						path='/podcast'
						element={
							<div className='w-full h-full p-5 overflow-y-auto'>
								<h2 className='text-xl font-bold'>Podcast</h2>
								<div className='pt-5 space-y-1'>
									{playlist.map((item) => (
										<div
											key={item.id}
											onClick={() => {
												dispatch(setCurrentAudio(item));
												dispatch(playAudio());
											}}
											className='w-ful h-16 bg-[#E39667] rounded-md flex items-center p-2 hover:bg-[#E39667]/50'
										>
											<figure className='h-full aspect-square bg-[#F9D2C2] rounded mr-2 overflow-hidden'>
												<img
													src={item.image}
													alt={item.title}
													className='w-full h-full object-cover'
												/>
											</figure>
											<div>
												<h4 className='font-bold leading-none mb-0.5'>
													{item.title}
												</h4>
												<p className='text-sm leading-none'>
													{item.subtitle}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						}
					/>
				</Routes>
				<AudioPlayer />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
