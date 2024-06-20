<script setup>
import { reactive, toRef, toRefs } from "vue";

// 必须加上reactive，才能是响应式，否则toRef没有作用
const obj = reactive({
  foo: 1,
  bar: 1,
});

// bar 转化为响应式对象，相当于解构
const state = toRef(obj, "bar");

const change = () => {
  state.value++;
  console.log(obj, state);
};

let { foo, bar } = toRefs(obj)
 
foo.value++
console.log(foo, bar);
</script>

<template>
  <div>
    <button @click="change">按钮</button>
    {{ state }}
  </div>
</template>