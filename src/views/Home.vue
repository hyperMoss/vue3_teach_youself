<template>
  <div>
    <div >Home</div>
    <p>My Data is: {{ someData }}</p>
    <p v-if="waited != null">I waited for {{ waited }}</p>
    <button @click="counter++">{{ counter }}</button>
    <div>
      <Teleport to="#body-title">
        <p>
          This slot content will be rendered wherever thportal-target with name 'destination'
          is located. 
        </p>
        <p> 通过portal可以确保不会有任何父组件的css去影响要显示的子组件。</p>
      </Teleport>
    </div>
    
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, inject, ref } from 'vue';
// import { guardSymbol } from '../../src/components/View'
export default {
  name: 'Home',
  props: ['waited'],
  data: () => ({
    toggle: false,
    counter: 0,
  }),
  setup() {
    const me = getCurrentInstance();
    // const registerGuard = inject(guardSymbol)
    // console.log('calling setup in Home')
    // await registerGuard(me)
    // emit('registerGuard', getCurrentInstance())
    function log(value) {
      console.log(value);
      return value;
    }
    return {
      log,
      someData: ref(0),
    };
  },
  _beforeRouteEnter() {
    this.toggle = true;
  },
};
</script>
