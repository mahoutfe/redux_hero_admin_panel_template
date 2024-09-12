// const Switcher = (heroes, selectedFilter, element) => {
// 	let filteredHeroes;
// 	let buttonClassName;

// 	switch (selectedFilter || element) {
// 		case 'fire':
// 			selectedFilter
// 				? (filteredHeroes = heroes.filter((item) => item.element === 'fire'))
// 				: (buttonClassName = 'btn btn-danger');
// 			break;
// 		case 'water':
// 			selectedFilter
// 				? (filteredHeroes = heroes.filter((item) => item.element === 'water'))
// 				: (buttonClassName = 'btn btn-primary');
// 			break;
// 		case 'wind':
// 			selectedFilter
// 				? (filteredHeroes = heroes.filter((item) => item.element === 'wind'))
// 				: (buttonClassName = 'btn btn-success');
// 			break;
// 		case 'earth':
// 			selectedFilter
// 				? (filteredHeroes = heroes.filter((item) => item.element === 'earth'))
// 				: (buttonClassName = 'btn btn-secondary');
// 			break;
// 		default:
// 			selectedFilter
// 				? (filteredHeroes = heroes)
// 				: (buttonClassName = 'btn btn-outline-dark');
// 	}

// 	return { filteredHeroes, buttonClassName };
// };

// export default Switcher;
