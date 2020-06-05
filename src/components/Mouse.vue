<!--
 * @Author: Dongzy
 * @since: 2020-06-05 17:38:46
 * @lastTime: 2020-06-05 17:43:53
 * @LastAuthor: Dongzy
 * @FilePath: \vite-test\src\components\Mouse.vue
 * @message: 
--> 
<template
  ><div>x:{{ x }}y:{{ y }}</div>
</template>

<script>
import { useMousePosition } from "./mouseFunc/index";

export default {
  setup() {
    const { x, y } = useMousePosition();
    // 其他逻辑...
    return { x, y };
  }
};
</script>
