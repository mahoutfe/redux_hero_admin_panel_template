const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
	filters: [],
	filter: 'all',
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
				heroes: action.payload,
				heroesLoadingStatus: 'idle',
			};
		case 'HEROES_FETCHING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error',
			};

		case 'HERO_DELETING':
			return {
				...state,
				heroesLoadingStatus: 'loading',
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

		case 'HERO_ADDING':
			return {
				...state,
				heroesLoadingStatus: 'loading',
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
				filter: action.payload,
			};

		case 'FILTERS_FETCHING':
			return {
				...state,
				filtersLoadingStatus: 'loading',
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

		default:
			return state;
	}
};

export default reducer;
