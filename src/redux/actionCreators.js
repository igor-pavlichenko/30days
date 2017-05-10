import * as types from './types';

const host = 'https://andthetimeis.com'
// seems like we are explicily exporting a function here
export const fetchNewTime = ({timezone = 'pst', str = 'now'}) => ({
	type: types.FETCH_NEW_TIME,
	payload: new Date().toString(),
	meta: {
		type: 'api',
		url: host + '/' + timezone + '/' + str + '.json'
	},
})

export const login = (user) => ({
	type: types.LOGIN,
	payload: user
})

export const logout = () => ({
	type: types.LOGOUT,
})
