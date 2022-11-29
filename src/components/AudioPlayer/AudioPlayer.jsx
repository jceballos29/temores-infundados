/** @format */

import React from 'react';
import { useState } from 'react';


const AudioPlayer = () => {
	const [sideUp, setSideUp] = useState(false);

	return <div className='fixed top-0 bottom-0 left-0 right-0 z-10 bg-[#E39667] transform transition-transform duration-200 translate-y-full'></div>;
};

export default AudioPlayer;
