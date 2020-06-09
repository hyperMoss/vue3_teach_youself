<template>
  <div>User: {{ id }}</div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default {
  name: 'User',
  props: {
    id: String,
  },

  beforeRouteUpdate(to, from, next) {
    console.log('in beforeRouteUpdate this', this);
    next(vm => {
      console.log('in next callback', vm);
    });
  },
};
</script>
