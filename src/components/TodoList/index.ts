import { reactive, ref } from 'vue';

/*
 * @Author: Dongzy
 * @since: 2020-06-08 14:30:48
 * @lastTime: 2020-06-08 15:33:26
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\components\TodoList\index.js
 * @message:
 */

export default  {
	setup() {
		const newTodoText:any = ref('');
		const todos: Object[] = reactive([
			{
				id: 1,
				title: 'Do the dishes',
			},
			{
				id: 2,
				title: 'Take out the trash',
			},
			{
				id: 3,
				title: 'Mow the lawn',
			},
		]);
		const nextTodoId :any = ref(4);
		const addNewTodo :Function = useAddTodo(todos, nextTodoId, newTodoText);
		return { newTodoText, todos, nextTodoId, addNewTodo };
	},
};
function useAddTodo(todos :Object[], nextTodoId:any, newTodoText:any) {
	const addNewTodo = function() {
		todos.push({
			id: nextTodoId.value++,
			title: newTodoText.value,
		});
		newTodoText.value = '';
	};

	return addNewTodo;
}
