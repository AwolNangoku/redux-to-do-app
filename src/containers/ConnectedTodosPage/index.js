import { connect } from 'react-redux'

import TodosPage from '../../components/app/pages/TodosPage/';
import { deleteToDoByName } from '../../services/state/todos/actions';

const mapStateToProps = state => {
	const { todos } = state.todos;
	return {
		todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteToDo: todoName => dispatch(deleteToDoByName(todoName))
	}
}

const ConnectedTodosPage = connect(mapStateToProps, mapDispatchToProps)(TodosPage)

export default ConnectedTodosPage;