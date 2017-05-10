const apiMiddleware = (store) => (next) => (action) => {
	// check if it's an API action, if not - let it go
	if (!action.meta || action.meta.type !== 'api') {
		return next(action);
	}

	// if we get this far then this is an api action

	// 1-Find the request URL and compose request options from meta
	const { url } = action.meta;
	const fetchOptions = Object.assign({}, action.meta); // copy object (own properties only)

	// 2-Make the request
	fetch(url, fetchOptions)
		// convert the response to json
		.then(resp => resp.json())
		.then(json => {
			// respond back to the user
			// by dispatching the original action without
			// the meta object
			let newAction = Object.assign({}, action, {
				payload: json.dateString,
			});
			delete newAction.meta; // wow, such magic
			store.dispatch(newAction);
		});
}

export default apiMiddleware;
