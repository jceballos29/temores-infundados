/** @format */

import { configureStore } from '@reduxjs/toolkit';

import audioPlayerReducer from './features/audioPlayer';

const store = configureStore({
	reducer: {
    audioPlayer: audioPlayerReducer,
  },
});

export default store;
