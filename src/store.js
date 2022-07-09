import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const groceriesReducer = (state = [], action) => {
	if (action.type === 'LOAD') {
		state = action.groceries;
	}
	if (action.type === 'UPDATE') {
		state = [...state.map(grocery => grocery.id === action.grocery.id ? action.grocery : grocery)];
	}
	if (action.type === 'CREATE') {
		state = [...state, action.grocery]
	}
	return state;
};

const viewReducer = (state = '', action) => {
	if (action.type === 'SET_VIEW') {
		state = action.view;
	}
	return state;
};

const reducers = combineReducers({
	view: viewReducer,
	groceries: groceriesReducer
});


const store = createStore(reducers, applyMiddleware(logger, thunk));


export { store as default };


