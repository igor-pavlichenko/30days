// Initial (starting) state
const initialState = {
	currentTime: Date.now().toString(),
}

// Our root reducer starts with the initial state
// and must return a representation of the next state
const rootReducer = (state = initialState, action) => {
	return state;
}

export default rootReducer;
