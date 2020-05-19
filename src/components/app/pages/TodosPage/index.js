import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { TodoRow, TodoContent, TodoDelete } from './styled';

const TodosPage = ({todos, addToDo, deleteToDo}) => {
	let history = useHistory();
	const [toDo, setTodo] = useState('');
	return (
		<>
			<h3>What would you like to note down as your to do tasks?</h3>
			<form
				onSubmit={event => event.preventDefault()}
			>
				<div>
					<label>Type in your to do task here:</label>
					<input type={"text"} onChange={event => setTodo(event.target.value)} value={toDo}/>
				</div>
				<div>
					<button onClick={() => {
						toDo && addToDo(toDo);
						setTodo('')
					}}> Add New task </button>
				</div>
			</form>
			<h2>List of to do taks has {todos.length} things</h2>
			{todos.map((todo, i) => (
				<TodoRow>
					<TodoContent onClick={()=> history.push(`/todo/${todo}`)}>
						{todo}
					</TodoContent>
					<TodoDelete onClick={()=> deleteToDo(todo)}>x</TodoDelete>
				</TodoRow>
			))}
		</>
	)
}



export default TodosPage;