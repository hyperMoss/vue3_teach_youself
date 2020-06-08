<!--
 * @Author: Dongzy
 * @since: 2020-06-08 14:53:16
 * @lastTime: 2020-06-08 15:44:09
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\components\TodoItem.vue
 * @message: 
--> 
<template>
  <li>{{title}} <button @click="$emit('remove')">Remove</button></li>
</template>

<script>
export default {
  props: {
    title: String,
  },
setup(props){
  return {title:`${props.title}`}
}
}
</script>

<style>

</style>
