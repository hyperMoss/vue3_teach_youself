<!--
 * @Author: Dongzy
 * @since: 2020-06-05 17:54:45
 * @lastTime: 2020-06-08 15:58:34
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\App.vue
 * @message: 
--> 
<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="body-title"></div>
    <Suspense>
      <template #default>
        <router-view
          :name="viewName"
          v-slot="{ Component, props }"
        >
          <!-- <transition
            name="fade"
            mode="out-in"
            @before-enter="flushWaiter"
            @before-leave="setupWaiter"
          > -->
          <component
            :is="Component"
            v-bind="props"
            v-if="Component"
          />
          <!-- </transition> -->
        </router-view>
      </template>
      <template #fallback>
        <div>Loading..............</div>
      </template>
    </Suspense>
    <div class="router-view">
      <div>路由信息</div>
      <pre>{{ currentLocation }}</pre>
      <section class="info">
        Name:
        <pre id="name">{{ currentLocation.name }}</pre>
      </section>

      <section class="info">
        Params:
        <pre id="params">{{ currentLocation.params }}</pre>
      </section>

      <section class="info">
        Query:
        <pre id="query">{{ currentLocation.query }}</pre>
      </section>

      <section class="info">
        Hash:
        <pre id="hash">{{ currentLocation.hash }}</pre>
      </section>

      <section class="info">
        FullPath:
        <pre id="fullPath">{{ currentLocation.fullPath }}</pre>
      </section>

      <section class="info">
        path:
        <pre id="path">{{ currentLocation.path }}</pre>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, computed, ref } from 'vue';
import { scrollWaiter } from './scrollWaiter.ts';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue'
export default defineComponent({
  name: 'App',
  components:{NavBar},
  setup() {
    const route = useRoute();
    const state = inject('state');
    console.log(route);
// 路由信息
    const viewName = ref('default');
    const currentLocation = computed(() => {
      const { matched, ...rest } = route;
      return rest;
    });
// promise waiter
    function flushWaiter() {
      scrollWaiter.flush();
    }
    function setupWaiter() {
      scrollWaiter.add();
    }
    const nextUserLink = computed(
      () => '/users/' + String((Number(route.value.params.id) || 0) + 1)
    );
    return {
      currentLocation,
      nextUserLink,
      state,
      flushWaiter,
      setupWaiter,
      viewName,
      toggleViewName() {
        viewName.value = viewName.value === 'default' ? 'other' : 'default';
      },
    };
  },
});
</script>
<style  scoped>
#app {
  display: flex;
  justify-content: space-between;
}
.router-view {
  width: 400px;
}
.router-link-active {
  color: darkorange;
}
.router-link-exact-active {
  color: red;
}
.long {
  background-color: lightgray;
  height: 3000px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-to,
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-30px, 0);
}

.info pre {
  display: inline;
}
</style>
