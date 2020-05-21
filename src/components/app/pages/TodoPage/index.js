import React from 'react'
import {useParams} from 'react-router-dom';

const TodoPage = ({ todos }) => {
	let {id} = useParams();
	let todo = todos.filter(todo => todo.id === id)[0]
	return (
		<div>
			Todo: { todo.text }
		</div>
		)
}


export default TodoPage;