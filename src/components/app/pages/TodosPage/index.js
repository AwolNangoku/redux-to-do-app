import React, {useState} from 'react'

const TodosPage = ({todos, addToDo, deleteToDo}) => {
	const [toDo, setTodo] = useState('');
	console.log('111')
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
						addToDo(toDo);
						setTodo('')
					}}> Add New task </button>
				</div>
			</form>
			<h2>List of to do taks has {todos.length} things</h2>
			{todos.map((todo, i) => (<div key={i} onClick={() => deleteToDo(todo)}>{todo}</div>))}
		</>
	)
}



export default TodosPage;