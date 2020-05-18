import { connect } from 'react-redux'

import TodosPage from '../../components/app/pages/TodosPage/';
import { addToDo, deleteToDo } from '../../services/state/todos/actions';

const mapStateToProps = state => {
	const { todos } = state.todos;
	return {
		todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addToDo: newTodo => dispatch(addToDo(newTodo)),
		deleteToDo: todo => dispatch(deleteToDo(todo))
	}
}

const ConnectedTodosPage = connect(mapStateToProps, mapDispatchToProps)(TodosPage)

export default ConnectedTodosPage;