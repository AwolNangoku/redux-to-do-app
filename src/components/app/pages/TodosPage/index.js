import React from 'react'

const TodosPage = ({todos}) => (
	<>
		{todos.map((todo) => (<div>{todo}</div>))}
	</>
	)


export default TodosPage;