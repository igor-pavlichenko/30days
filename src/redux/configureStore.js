import { createStore, applyMiddleware } from 'redux';

import { rootReducer, initialState } from './reducers';

// MIDDLEWARE
const loggingMiddleware = (store) => (next) => (action) => {
	// Our middleware
	console.log('Redux Log: ', action)
	// call the next function
	next(action);
}


export const configureStore = () => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			loggingMiddleware,
		),
	);

	return store;
}

export default configureStore;
