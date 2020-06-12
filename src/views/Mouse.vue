<!--
 * @Author: Dongzy
 * @since: 2020-06-05 17:38:46
 * @lastTime: 2020-06-11 21:06:25
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\views\Mouse.vue
 * @message: 
--> 
<template
  >
  <div>
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
  </div>

</template>

<script>
// 将之前的函数引入组件
import { useMousePosition,useMousePositionReactive,useMousePositionToRefs } from "../components/mouseFunc/index";

export default {
  // 将其放入setup 装载区间
  setup() {
    const { x, y } = useMousePosition();
    // const x =1,y=0
    const pos = useMousePositionReactive();
    // 解构
    const {j,k} = useMousePositionReactive();
    // 结构
    const posDeep={...useMousePositionReactive()}
    // 
    const {m,n}= useMousePositionToRefs()
    // 其他逻辑...
    return { x, y,pos,k,j,posDeep,m,n };
  }
};
</script>
