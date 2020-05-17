import React from 'react'

const TodosPage = ({todos}) => (
	<>
		{todos.map((todo, i) => (<div key={i}>{todo}</div>))}
	</>
	)


export default TodosPage;