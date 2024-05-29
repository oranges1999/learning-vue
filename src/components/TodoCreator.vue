<script setup>
import { reactive, ref, defineEmits } from 'vue';

// for primitive datatype
const todo = ref(""); 
// for more complex datatype
const todoState = reactive({ 
    todo: ""
}); 
const msg = ref("")
const emit = defineEmits(["create-todo"]);
const createTodo = () => {
    if (todo.value.length<3) {
        return msg = "Too short, please check again"
    }
    emit("create-todo", todo.value)
}
</script>

<template>
    <div class="input-wrap">
        <input v-model.trim="todo" type="text">
        <p>{{ msg }}</p>
        <button @click="createTodo()">Create</button>
    </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}
</style>