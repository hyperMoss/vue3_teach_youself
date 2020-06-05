/*
 * @Author: Dongzy
 * @since: 2020-06-05 13:40:35
 * @lastTime: 2020-06-05 13:53:20
 * @LastAuthor: Dongzy
 * @FilePath: \my-test3\src\components\mouseFunc\index.js
 * @message:
 */

import { onMounted, onUnmounted, ref } from "vue";

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}
