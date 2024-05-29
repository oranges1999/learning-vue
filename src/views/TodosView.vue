<script setup>
import TodoCreator from "@/components/TodoCreator.vue";
import NewItem from "@/components/NewItem.vue";
import { ref } from "vue";
import { uid } from "uid";

const todoList = ref([]);
const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted:null,
    isEditing:null
  });
}
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo"/>
    <NewItem v-for="todo in todoList" :key="todo.id"/>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>
