import { connect } from 'react-redux'
import TodoPage from '../../components/app/pages/TodoPage/'
import { saveTodo } from '../../services/state/todos/actions'

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch => ({ saveTodo: editedTodo => dispatch(saveTodo(editedTodo)) })

const ConnectedTodoPage = connect(mapStateToProps, mapDispatchToProps)(TodoPage)

export default ConnectedTodoPage;