import { connect } from 'react-redux'
import TodoPage from '../../components/app/pages/TodoPage/'
import { addToDo, deleteToDo } from '../../services/state/todos/actions'

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch => {
	return {
		addToDo: newTodo => dispatch(addToDo(newTodo)),
		deleteToDo: todoId => dispatch(deleteToDo(todoId))
	}
}

const ConnectedTodoPage = connect(mapStateToProps, mapDispatchToProps)(TodoPage)

export default ConnectedTodoPage;