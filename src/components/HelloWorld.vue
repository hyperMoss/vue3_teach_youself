<!--
 * @Author: Dongzy
 * @since: 2020-06-05 16:14:58
 * @lastTime: 2020-06-05 17:46:15
 * @LastAuthor: Dongzy
 * @FilePath: \vite-test\src\components\HelloWorld.vue
 * @message: 
--> 
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <Mouse/>
</template>


<script>
import Mouse from "./Mouse.vue";
export default {
  name: 'HelloWorld',
  components:{
      Mouse,
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
