import React, { useRef, useEffect, useCallback, useState } from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ videoSrc, isYouTube = false }) => {
	const videoRef = useRef(null);
	const [isError, setIsError] = useState(false);

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

	// useCallback to ensure handleVideoEnd is not recreated on every render
	const handleVideoEnd = useCallback(() => {
		let url;

		// If it's a YouTube video, use the proper watch URL format for redirection
		if (isYouTube) {
			url = new URL(
				'https://www.youtube.com/embed/PBmM1DOHgUI?si=qBkX7aVrykJ_dNlU'
			); // Redirect to any YouTube video you'd like
		} else {
			// Example: redirect to another MP4 video or any other page
			url = new URL(''); // Change this to any destination URL
		}

		const currentUrl = new URL(window.location.href);

		// Preserve UTM parameters from the current URL and pass them to the next URL
		currentUrl.searchParams.forEach((value, key) => {
			if (key.startsWith('utm_')) {
				url.searchParams.append(key, value);
			}
		});

		window.location.href = url.toString();
	}, [isYouTube]); // Dependencies

	// Handle video errors
	const handleVideoError = () => {
		setIsError(true);
		alert('Error: Video could not be loaded.');
	};

	useEffect(() => {
		const videoElement = videoRef.current;
		if (videoElement && !isYouTube) {
			// Add an event listener for the 'ended' event if it's not a YouTube video
			videoElement.addEventListener('ended', handleVideoEnd);
			return () => {
				videoElement.removeEventListener('ended', handleVideoEnd);
			};
		}
	}, [handleVideoEnd, isYouTube]); // Ensure `handleVideoEnd` and `isYouTube` are included in the dependency array

	return (
		<div className='video-container'>
			{isError ? (
				<p>Sorry, the video could not be loaded.</p>
			) : isYouTube ? (
				<iframe
					ref={videoRef}
					className='video-player'
					width='100%'
					height='100%'
					src={videoSrc}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			) : (
				<video
					ref={videoRef}
					className='video-player'
					onClick={handleFullscreen}
					onError={handleVideoError} // Handle errors
					controls
					preload='metadata'
				>
					<source src={videoSrc} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			)}
		</div>
	);
};

export default VideoPlayer;
