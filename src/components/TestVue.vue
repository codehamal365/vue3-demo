<script setup>
import { ref } from "vue";

const msg = ref("hello");

const obj = ref({
  a: 1,
  b: 2,
});

const click = () => {
  msg.value = "hello 1";
};

const click2 = () => {
  obj.value.a = "click a";
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1 class="green">{{ obj.a }}</h1>
    <button @click="click">click me</button>
    <button @click="click2">click me 2</button>
  </div>
</template>