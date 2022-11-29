/** @format */

import './App.css';
import { AudioPlayer, Footer, Header } from './components';

function App() {
	return (
		<div className='w-screen h-screen relative p-5'>
      <Header />
			<AudioPlayer />
      <Footer />
		</div>
	);
}

export default App;
