// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import {
	filterSelected,
	filtersFetchingError,
	filtersFetched,
	filtersFetching,
} from '../../actions';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
	const { filters, filter, filtersLoadingStatus } = useSelector(
		(state) => state
	);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(filtersFetching());
		request('http://localhost:3001/filters')
			.then((data) => dispatch(filtersFetched(data)))
			.catch(() => dispatch(filtersFetchingError()));

		// eslint-disable-next-line
	}, []);

	if (filtersLoadingStatus === 'loading') {
		return <Spinner />;
	} else if (filtersLoadingStatus === 'error') {
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
	}

	const buttons = filters.map(({ element, label }) => {
		const active = filter === element;
		const clazz = active ? 'active' : null;
		let buttonClassName;

		switch (element) {
			case 'fire':
				buttonClassName = 'btn btn-danger';
				break;
			case 'water':
				buttonClassName = 'btn btn-primary';
				break;
			case 'wind':
				buttonClassName = 'btn btn-success';
				break;
			case 'earth':
				buttonClassName = 'btn btn-secondary';
				break;
			default:
				buttonClassName = 'btn btn-outline-dark';
		}
		return (
			<button
				type='button'
				className={`${buttonClassName} ${clazz}`}
				key={element}
				onClick={() => {
					dispatch(filterSelected(element));
				}}
			>
				{label}
			</button>
		);
	});

	return (
		<div className='card shadow-lg mt-4'>
			<div className='card-body'>
				<p className='card-text'>Отфильтруйте героев по элементам</p>
				<div className='btn-group'>{buttons}</div>
			</div>
		</div>
	);
};

export default HeroesFilters;
