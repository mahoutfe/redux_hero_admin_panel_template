import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';

import {
	heroDeleted,
	heroDeletingError,
	heroesFetched,
	heroesFetching,
	heroesFetchingError,
} from '../../actions';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';

const HeroesList = () => {
	const { selectedFilter, heroes, heroesLoadingStatus, filteredHeroes } =
		useSelector((state) => state);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(heroesFetching());
		request('http://localhost:3001/heroes')
			.then((data) => dispatch(heroesFetched(data)))
			.catch(() => dispatch(heroesFetchingError()));

		// eslint-disable-next-line
	}, []);

	if (heroesLoadingStatus === 'loading') {
		return <Spinner />;
	} else if (heroesLoadingStatus === 'error') {
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
	}

	const renderHeroesList = (arr) => {
		if (arr.length === 0) {
			return <h5 className='text-center mt-5'>Героев пока нет</h5>;
		}

		return arr.map(({ id, ...props }) => {
			return (
				<HeroesListItem
					key={id}
					{...props}
					onDelete={() => {
						request(`http://localhost:3001/heroes/${id}`, 'DELETE')
							.then(() => dispatch(heroDeleted(id)))
							.catch(() => dispatch(heroDeletingError()));
					}}
				/>
			);
		});
	};

	const elements =
		selectedFilter === 'all'
			? renderHeroesList(heroes)
			: renderHeroesList(filteredHeroes);

	return <ul>{elements}</ul>;
};

export default HeroesList;
