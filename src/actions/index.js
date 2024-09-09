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

export const heroDeleting = () => {
	return {
		type: 'HERO_DELETING',
	};
};

export const heroDeleted = (heroes, id) => {
	return {
		type: 'HERO_DELETED',
		payload: heroes.filter((item) => item.id !== id),
	};
};

export const heroDeletingError = () => {
	return {
		type: 'HERO_DELETING_ERROR',
	};
};

export const heroAdding = () => {
	return {
		type: 'HERO_ADDING',
	};
};

export const heroAdded = (heroes, values) => {
	return {
		type: 'HERO_ADDED',
		payload: heroes.concat(values),
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
