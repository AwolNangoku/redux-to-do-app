import { handleActions } from 'redux-actions'

const initialState = {
	todos: []
}

const todos = handleActions(
{
	LIST_TODOS: (state, action) => (state),
	ADD_TO_DO: (state, action) => {
		return {
			todos: [...state.todos, action.payload.aTodo]
		}
	},
	DELETE_TO_DO: (state, action) => {
		return {
			todos: state.todos.filter(todo => todo !== action.payload.aTodo)
		}
	}
},
initialState
)

export default todos;