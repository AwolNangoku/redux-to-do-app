import createAction from 'redux-actions/es/createAction'

const listTodos = createAction('LIST_TODOS', todos => ({todos}))

const addToDo = createAction('ADD_TO_DO', aTodo => ({
	aTodo
}))

const deleteToDo = createAction('DELETE_TO_DO', aTodo => ({
	aTodo
}))


export { listTodos, addToDo, deleteToDo }