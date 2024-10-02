import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Comments from './components/Comments';
import Title from './components/Title';
import CTAButton from './components/CTAButton';

function App() {
	return (
		<div className='App'>
			<Title text='Custom YouTube Short Title' />
			<div className='app-content'>
				<VideoPlayer />
				<Comments />
			</div>
			<CTAButton text='Subscribe Now' url='https://example.com/subscribe' />
		</div>
	);
}

export default App;
