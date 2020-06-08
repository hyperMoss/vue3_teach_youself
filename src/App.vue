<!--
 * @Author: Dongzy
 * @since: 2020-06-05 17:54:45
 * @lastTime: 2020-06-08 15:58:34
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\App.vue
 * @message: 
--> 
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <TodoList name="TODO-LIST" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from "./components/TodoList.vue";
export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoList,
    test:{
      props: {
    name: String,
  },
  setup(props) {
    return {
      msg: `hello ${props.name}!`,
    };
  },
  template:`<div>{{ msg }}</div>`
    }
  }
}
</script>
