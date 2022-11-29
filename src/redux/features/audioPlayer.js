/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	show: false,
	currentAudio: null,
  isPlaying: false
};

const audioPlayerSlice = createSlice({
	name: 'audioPlayer',
	initialState,
	reducers: {
    openAudioPlayer(state, action) {
      state.show = true;
    },
    closeAudioPlayer(state, action) {
      state.show = false; 
    },
    setCurrentAudio(state, action) {
      state.currentAudio = action.payload;
    },
    playAudio(state, action) {
      state.isPlaying = true;
    },
    pauseAudio(state, action) {
      state.isPlaying = false;
    },
    toggleAudio(state, action) {
      state.isPlaying = !state.isPlaying;
    }


	},
});

export const { closeAudioPlayer, openAudioPlayer, playAudio, pauseAudio, setCurrentAudio } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
