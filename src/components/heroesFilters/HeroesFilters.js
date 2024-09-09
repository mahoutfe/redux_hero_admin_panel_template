// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useSelector, useDispatch } from 'react-redux';
import { filterSelected } from '../../actions';

const HeroesFilters = () => {
	const { filters, filter } = useSelector((state) => state);
	const dispatch = useDispatch();

	let buttonClassName;

	switch (filter) {
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

	const buttons = filters.map(({ element, label }) => {
		const active = filter === element;
		const clazz = active ? 'active' : null;

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
