import { createStore, combineReducers } from 'redux';

import { rootReducer, initialState } from './reducers';
import {
	reducer as userReducer,
	initialState as userInitialState } from './currentUser';


export const configureStore = () => {
	const store = createStore(
		combineReducers({
			// REDUCERS
			time: rootReducer,
			user: userReducer,
		}),
		{
			// INITIAL STATES
			time: initialState,
			user: userInitialState,
		}
	);

	return store;
}

export default configureStore;
