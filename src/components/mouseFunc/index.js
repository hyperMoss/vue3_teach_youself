/*
 * @Author: Dongzy
 * @since: 2020-06-05 13:40:35
 * @lastTime: 2020-06-06 12:04:44
 * @LastAuthor: Dongzy
 * @FilePath: \vue3_teach_youself\src\components\mouseFunc\index.js
 * @message:
 */

import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';

export function useMousePosition() {
	// 使用ref 去包裹变量x，y使其变动可被监听到
	const x = ref(0);
	const y = ref(0);
	// 定义更新事件函数
	function update(e) {
		x.value = e.pageX;
		y.value = e.pageY;
	}
	// 绑定鼠标移动事件
	onMounted(() => {
		window.addEventListener('mousemove', update);
	});
	// 移除绑定鼠标移动事件
	onUnmounted(() => {
		window.removeEventListener('mousemove', update);
	});

	return { x, y };
}
export function useMousePositionReactive() {
	// 使用ref 去包裹变量x，y使其变动可被监听到
	const pos = reactive({ j: 0, k: 0 });
	// 定义更新事件函数
	function update(e) {
		pos.j = e.pageX;
		pos.k = e.pageY;
	}
	// 绑定鼠标移动事件
	onMounted(() => {
		window.addEventListener('mousemove', update);
	});
	// 移除绑定鼠标移动事件
	onUnmounted(() => {
		window.removeEventListener('mousemove', update);
	});

	return  pos ;
}
export function useMousePositionToRefs() {
	// 使用ref 去包裹变量x，y使其变动可被监听到
	const pos = reactive({ m: 0, n: 0 });
	// 定义更新事件函数
	function update(e) {
		pos.m = e.pageX;
		pos.n = e.pageY;
	}
	// 绑定鼠标移动事件
	onMounted(() => {
		window.addEventListener('mousemove', update);
	});
	// 移除绑定鼠标移动事件
	onUnmounted(() => {
		window.removeEventListener('mousemove', update);
	});

	return toRefs(pos)  ;
}
