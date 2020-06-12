<!--
 * @Author: Dongzy
 * @since: 2020-06-08 13:39:00
 * @lastTime: 2020-06-11 21:34:05
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\components\TodoList.vue
 * @message: 
--> 
<template>
  <div>
    <h3>{{msg}}</h3>
    <div>
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          id="new-todo"
          placeholder="E.g. Feed the cat"
          v-model="newTodoText"
        />
        <button>Add</button>
      </form>
      <ul>
        <TodoItem 
          :key="todo.id"
          :title="todo.title"
          v-for="(todo, index) in todos"
          @remove="todos.splice(index, 1)"/>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import setupFunc from './TodoList/index.ts'
export default {
  props: {
    name: String,
  },
  components: { TodoItem },
  	setup(props) {
      const {newTodoText, todos, nextTodoId, addNewTodo}= setupFunc.ok()
		return { newTodoText, todos, nextTodoId, addNewTodo, msg: `hello ${props.name}!` };
	},
};
</script>

<style>
</style>
