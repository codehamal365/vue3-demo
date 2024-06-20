<script setup>
import { reactive } from "vue";

let person = reactive({
  name: "小满",
});

const click = () => {
  person.name = "大满";
};

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ person.name }}</h1>
    <button @click="click">click me</button>

  </div>
</template>