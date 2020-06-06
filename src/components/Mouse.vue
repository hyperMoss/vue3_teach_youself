<!--
 * @Author: Dongzy
 * @since: 2020-06-05 17:38:46
 * @lastTime: 2020-06-06 12:05:43
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\components\Mouse.vue
 * @message: 
--> 
<template
  >
  <div>Ref</div>
  <div>x:{{ x }}y:{{ y }}</div>
 <div>Reactive</div>
<div>x:{{ pos.j }}y:{{ pos.k }}</div>
 <div>Reactive 标准类型</div>
<div>x:{{j }}y:{{ k }}</div>
<div>Reactive 深拷贝</div>
<div>x:{{posDeep.j}}y:{{ posDeep.k }}</div>
<div>Reactive+ToRef</div>
<div>x:{{m}}y:{{ n }}</div>
</template>

<script>
// 将之前的函数引入组件
import { useMousePosition,useMousePositionReactive,useMousePositionToRefs } from "./mouseFunc/index";

export default {
  // 将其放入setup 装载区间
  setup() {
    const { x, y } = useMousePosition();
    const pos = useMousePositionReactive();
    const {j,k} = useMousePositionReactive();
    const posDeep={...useMousePositionReactive()}
    const {m,n}= useMousePositionToRefs()
    // 其他逻辑...
    return { x, y,pos,k,j,posDeep,m,n };
  }
};
</script>
