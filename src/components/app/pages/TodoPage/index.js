import React, { useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const TodoPage = ({ todos, saveTodo }) => {
	let history = useHistory()
	let {id} = useParams();
	let todo = todos.filter(todo => todo.id === id)[0]
	const [editedToDo, setEditedToDo] = useState(todo)
	return (
		<div>
			Todo: { editedToDo.text }

			<form onSubmit={event => event.preventDefault()}>
				<div>
					<input type='text' onChange={event => setEditedToDo({...editedToDo, ...{ text: event.target.value}})} value={editedToDo.text}/>
				</div>
				<div>
					<button onClick={() => saveTodo(editedToDo)}>Save</button>
					<button onClick={() => history.push('/')}>Back to your todos list</button>
				</div>	
			</form>
		</div>
		)
}


export default TodoPage;