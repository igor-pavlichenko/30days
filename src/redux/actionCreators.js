import * as types from './types';

// seems like we are explicily exporting a function here
export const fetchNewTime = () => ({
	type: types.FETCH_NEW_TIME,
	payload: new Date().toString(),
})

export const login = (user) => ({
	type: types.LOGIN,
	payload: user
})

export const logout = () => ({
	type: types.LOGOUT,
})
