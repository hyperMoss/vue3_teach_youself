<template>
<div>
  <ul>
    <li>
        <router-link to="/home">Home (redirects)</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/always-redirect">/always-redirect</router-link>
      </li>
      <li>
        <router-link to="/users/5">/users/5</router-link>
      </li>
        <li>
        <router-link to="/with-data">/with-data (suspense)</router-link>
      </li>
    <li><router-link to='/todo' >TodoList</router-link></li>
    <li><router-link to='/mouse' >鼠标位置（Ref-with Reactive）</router-link></li>
  </ul>

</div>
</template>

<script>
export default {
  name: 'NavBar',
  setup() {}
  
}

</script>

<style>

</style>
