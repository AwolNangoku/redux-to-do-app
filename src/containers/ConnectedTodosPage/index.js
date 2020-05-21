import { connect } from 'react-redux'
import { getTodos } from './selectors'
import TodosPage from '../../components/app/pages/TodosPage/'
import { addToDo, deleteToDo } from '../../services/state/todos/actions'

const mapStateToProps = state => ({todos: getTodos(state)})

const mapDispatchToProps = dispatch => {
	return {
		addToDo: newTodo => dispatch(addToDo(newTodo)),
		deleteToDo: todoId => dispatch(deleteToDo(todoId))
	}
}

const ConnectedTodosPage = connect(mapStateToProps, mapDispatchToProps)(TodosPage)

export default ConnectedTodosPage;