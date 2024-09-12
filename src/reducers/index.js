const initialState = {
	heroes: [],
	filteredHeroes: [],
	heroesLoadingStatus: 'idle',
	filters: [],
	selectedFilter: 'all',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'HEROES_FETCHING':
			return {
				...state,
				heroesLoadingStatus: 'loading',
			};
		case 'HEROES_FETCHED':
			return {
				...state,
				heroes: (state.selectedFilter = 'all'
					? action.payload
					: action.payload.filter(
							(item) => item.element === state.selectedFilter
					  )),
				heroesLoadingStatus: 'idle',
			};
		case 'HEROES_FETCHING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error',
			};

		case 'HERO_DELETED':
			return {
				...state,
				heroes: state.heroes.filter((item) => item.id !== action.payload),
				heroesLoadingStatus: 'idle',
			};

		case 'HERO_DELETING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error',
			};

		case 'HERO_ADDED':
			return {
				...state,
				heroes: [...state.heroes, action.payload],
				heroesLoadingStatus: 'idle',
			};

		case 'HERO_ADDING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error',
			};

		case 'FILTER_SELECTED':
			return {
				...state,
				selectedFilter: action.payload,
			};

		case 'FILTERS_FETCHED':
			return {
				...state,
				filters: action.payload,
				filtersLoadingStatus: 'idle',
			};
		case 'FILTERS_FETCHING_ERROR':
			return {
				...state,
				filtersLoadingStatus: 'error',
			};

		case 'HEROES_FILTERED':
			return {
				...state,
				filteredHeroes:
					action.payload !== 'all'
						? state.heroes.filter((item) => item.element === action.payload)
						: [],
			};

		default:
			return state;
	}
};

export default reducer;
