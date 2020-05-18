import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions';

const initialState = [];

const todos = createReducer(initialState,
{
	[actions.listTodos]: (state, action) => (state),
	[actions.addToDo]: (state, action) => ([...state, action.payload]),
	[actions.deleteToDo]: (state, action) => (state.filter(todo => todo !== action.payload))
},
initialState
)

export default todos;