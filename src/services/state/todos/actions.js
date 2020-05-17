import { createAction } from 'redux-actions';

const listTodos = createAction('LIST_TODOS', todos => ({todos}))

const addToDo = createAction('ADD_TO_DO', aTodo => ({
	aTodo
}))

const deleteToDoByName = createAction('ADD_TO_DO', todoName => ({
	todoName
}))


export { listTodos, addToDo, deleteToDoByName }