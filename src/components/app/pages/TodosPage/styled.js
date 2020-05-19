import styled from 'styled-components';

const TodoRow = styled.div`
	display: flex;
	flex-direction: row;
`

const TodoContent = styled.div`
	cursor: pointer;
	margin: 20px;
	background-color: yellow;
`

const TodoDelete = styled.div`
	cursor: pointer;
	margin: 20px;
	background-color: red;
	font-weight: bold;
	font-size: 20px;
`

export { TodoRow, TodoContent, TodoDelete }