import React from 'react';
import '../styles/Comments.css';
import { formatDistanceToNow, subDays } from 'date-fns';

const Comments = () => {
	// Sample data for comments
	const comments = [
		{ id: 1, username: 'John Doe', text: 'Amazing video!' },
		{ id: 2, username: 'Mike Johnson', text: 'Great content!' },
		{ id: 3, username: 'David Smith', text: 'Very informative, thanks!' },
	];

	// Helper function to generate a random date within the last 60 days
	const getRandomDate = () => {
		const randomDaysAgo = Math.floor(Math.random() * 60); // 0 to 59 days ago
		return subDays(new Date(), randomDaysAgo);
	};

	return (
		<div className='comments-section'>
			{comments.map((comment) => (
				<div className='comment' key={comment.id}>
					<div className='comment-avatar'>
						{/* Placeholder for older male avatar */}
						<img
							src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528'
							alt='avatar'
							className='avatar'
						/>
					</div>
					<div className='comment-content'>
						<p className='comment-username'>{comment.username}</p>
						<p className='comment-text'>{comment.text}</p>
						<p className='comment-date'>
							{formatDistanceToNow(getRandomDate(), { addSuffix: true })}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Comments;
