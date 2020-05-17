import { handleActions } from 'redux-actions'

const initialState = {
	todos: ['Q', 'B', 'C']
}

const todos = handleActions(
{
	LIST_TODOS: (state, action) => {
		return state;
	},
},
initialState
)

export default todos;