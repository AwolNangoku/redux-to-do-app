import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions';

const initialState = [];

const todos = createReducer(initialState,
{
	[actions.listTodos]: (state, action) => (state),
	[actions.addToDo]: (state, action) => {
		console.log('11111', action.payload)
		return [...state, action.payload];
	},
	[actions.deleteToDo]: (state, action) => (state.filter(todo => todo !== action.payload))
},
initialState
)

export default todos;