import React, { useRef, useEffect } from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = () => {
	const videoRef = useRef(null);

	// Function to handle fullscreen toggle
	const handleFullscreen = () => {
		if (videoRef.current) {
			if (document.fullscreenElement) {
				document.exitFullscreen();
			} else {
				videoRef.current.requestFullscreen();
			}
		}
	};

	// Function to preserve UTM parameters and redirect after video ends
	const handleVideoEnd = () => {
		const url = new URL('https://www.youtube.com/watch?v=I4uq3wcQIGA');
		const currentUrl = new URL(window.location.href);

		// Preserve UTM parameters
		currentUrl.searchParams.forEach((value, key) => {
			if (key.startsWith('utm_')) {
				url.searchParams.append(key, value);
			}
		});

		window.location.href = url.toString();
	};

	useEffect(() => {
		const videoElement = videoRef.current;
		if (videoElement) {
			videoElement.addEventListener('ended', handleVideoEnd);

			return () => {
				videoElement.removeEventListener('ended', handleVideoEnd);
			};
		}
	}, []);

	return (
		<div className='video-container'>
			<video
				ref={videoRef}
				className='video-player'
				onClick={handleFullscreen}
				controls
				preload='metadata'
			>
				<source src='path-to-your-video.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoPlayer;
