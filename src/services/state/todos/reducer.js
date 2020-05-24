import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions';

const initialState = [];

const todos = createReducer(
	initialState,
	{
		[actions.addToDo]: (state, action) => ([...state, action.payload]),
		[actions.deleteToDo]: (state, action) => (state.filter(todo => todo.id !== action.payload)),
		[actions.saveTodo]: (state, action) => {
			let todos = state.filter(todo => todo.id !== action.payload.id)
			return [...todos, action.payload]
		}
	}
)

export default todos;