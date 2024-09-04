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

export const deleteHero = (heroes, id) => {
	return {
		type: 'HERO_DELETING',
		payload: heroes.filter((item) => item.id !== id),
	};
};

export const addHero = (heroes, value) => {
	return {
		type: 'HERO_ADDING',
		payload: heroes.concat(value),
	};
};
