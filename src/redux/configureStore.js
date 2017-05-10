import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer, initialState } from './reducers/reducers';
import loggingMiddleware from './middleware/loggingMiddleware';
import apiMiddleware from './middleware/apiMiddleware';


export const configureStore = () => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware(
				loggingMiddleware,
				apiMiddleware,
			)
		),
	);

	return store;
}

export default configureStore;
