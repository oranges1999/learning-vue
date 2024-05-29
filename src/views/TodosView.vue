<script setup>
import { Icon } from "@iconify/vue";
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

const toggleTodoComplete = (todoPos) => {
  todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted
}
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo"/>
    <ul class="todo-list" v-if="todoList.length>0">
      <NewItem 
        v-for="(todo, index) in todoList" 
        :todo="todo"
        :index="index"
        @toggle-complete="toggleTodoComplete"  
      />
    </ul>
    <p class="todos-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" width="22" height="22" />
      <span>You have no todo to complete</span>
    </p>
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

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
