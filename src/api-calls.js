import axios from 'axios';

const toggle = (grocery) => {
	return async (dispatch) => {
		const updated = (await axios.put(`/api/groceries/${grocery.id}`, { purchased: !grocery.purchased })).data;
		dispatch({ type: 'UPDATE', grocery: updated });
	}
}

const create = () => {
	return async (dispatch) => {
		const grocery = (await axios.post('/api/groceries/random')).data;
		dispatch({ type: 'CREATE', grocery });
	}
}

const bootstrap = () => {
	return async (dispatch) => {
		const groceries = (await axios.get('/api/groceries')).data;
		dispatch({ type: 'LOAD', groceries });
	}
}

const formCreate = (name) => {
	return async (dispatch) => {
		const grocery = (await axios.post('/api/groceries', { name })).data;
		dispatch({ type: 'CREATE', grocery });
	}
}


export {
	toggle,
	create,
	bootstrap,
	formCreate
}