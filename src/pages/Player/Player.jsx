import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useParams, Link } from 'react-router-dom';

const Player = () => {
	const { id } = useParams();
	const [apiData, setApiData] = useState({
		name: '',
		key: '',
		published_at: '',
		type: '',
	});

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmQ0OWI2MDYxMjJmYzZiY2U3ZGRhOTcyMTRhOTJhYyIsInN1YiI6IjY2NDVhNmRhNzY3MTJkOWFmM2JkNmEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EKCset7nk0toY2MRo0MOd0RimdnQa003zt2fj0ZbrjQ',
		},
	};

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
			options
		)
			.then((response) => response.json())
			.then((response) => setApiData(response.results[0]))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='player'>
			<Link to='/'>
				<img src={back_arrow_icon} alt='' />
			</Link>
			<iframe
				width='90%'
				height='90%'
				src={`https://www.youtube.com/embed/${apiData.key}`}
				title='trailer'
				frameborder='0'
				allowFullScreen
			></iframe>
			<div className='player-info'>
				<p>{apiData.published_at.slice(0, 10)}</p>
				<p>{apiData.name}</p>
				<p>{apiData.type}</p>
			</div>
		</div>
	);
};

export default Player;
