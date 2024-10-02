import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Comments from './components/Comments';
import CTAButton from './components/CTAButton';
import Title from './components/Title';

function App() {
	return (
		<div className='App'>
			<Title />
			<VideoPlayer />
			<Comments />
			<CTAButton />
		</div>
	);
}

export default App;
