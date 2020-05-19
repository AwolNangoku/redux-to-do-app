import React from 'react'
import {useParams} from 'react-router-dom';

const TodoPage = () => {
	let {todo} = useParams();
	return (
		<div>
			Todo: {todo}
		</div>
		)
}


export default TodoPage;