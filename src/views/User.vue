<template>
  <div>User: {{ id }}</div>
</template>

<script>
import { defineComponent, inject } from 'vue';
import { getData, delay } from '../api';
export default {
  name: 'User',
  props: {
    id: String,
  },

  async setup() {
    // 添加异步操作
    await delay(1000);
    return;
  },
  beforeRouteUpdate(to, from, next) {
    console.log('in beforeRouteUpdate this', this);
    next(vm => {
      console.log('in next callback', vm);
    });
  },
};
</script>
