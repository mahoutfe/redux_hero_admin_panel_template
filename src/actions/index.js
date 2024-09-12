export const heroesFetching = () => {
	return {
		type: 'HEROES_FETCHING',
	};
};

export const heroesFetched = (heroes) => {
	return {
		type: 'HEROES_FETCHED',
		payload: heroes,
	};
};

export const heroesFetchingError = () => {
	return {
		type: 'HEROES_FETCHING_ERROR',
	};
};

export const heroDeleted = (id) => {
	return {
		type: 'HERO_DELETED',
		payload: id,
	};
};

export const heroDeletingError = () => {
	return {
		type: 'HERO_DELETING_ERROR',
	};
};

export const heroAdded = (values) => {
	return {
		type: 'HERO_ADDED',
		payload: values,
	};
};

export const heroAddingError = () => {
	return {
		type: 'HERO_ADDING_ERROR',
	};
};

export const filterSelected = (element) => {
	return {
		type: 'FILTER_SELECTED',
		payload: element,
	};
};

export const filtersFetched = (filters) => {
	return {
		type: 'FILTERS_FETCHED',
		payload: filters,
	};
};

export const filtersFetchingError = () => {
	return {
		type: 'FILTERS_FETCHING_ERROR',
	};
};

export const heroesFiltered = (element) => {
	return {
		type: 'HEROES_FILTERED',
		payload: element,
	};
};
