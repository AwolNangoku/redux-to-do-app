import { createAction } from '@reduxjs/toolkit'

const listTodos = createAction('LIST_TODOS')

const addToDo = createAction('ADD_TO_DO')

const deleteToDo = createAction('DELETE_TO_DO')

const saveTodo = createAction('SAVE_TO_DO')


export { listTodos, addToDo, deleteToDo, saveTodo }