<script setup>
import { ref } from 'vue';

let count = ref(0);

const addToCount=()=>{
  count.value = count.value + 1;
}

const subtractToCount=()=>{
  count.value = count.value - 1;
}
</script>

<template>
  <main>
    <div>
      <h4>
        The current count is...
      </h4>
      <h1>{{ count }}</h1>
      <button @click="subtractToCount">-</button>
      <button @click="addToCount">+</button>
    </div>
  </main>
</template>

<style scoped>
  main{
    display: flex;
    justify-content: center;
    align-items: center;
    background-origin: aliceblue;
    height: 100vh;
    width: 100vw;
  }
  div{
    text-align: center;
  }
</style>
  