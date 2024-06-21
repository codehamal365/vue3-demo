<script setup>

import axios from 'axios'

axios.get("/api/test").then((res) => {
  console.log(res.data);
});

</script>

<template>
  <h1>test ...</h1>

</template>