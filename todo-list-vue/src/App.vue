<script setup lang="ts">
import { onMounted } from "vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoList from "./components/TodoList.vue"
import { getTodoListUseCase } from "./dependencies.ts"
import { store } from "./composables/useStore.ts";

onMounted(() => {
  getTodoListUseCase.execute({
    next:({data}) => {
      if (data) store.setTodoList(data)
    }
  })
  })
  
</script>

<template>
<div class="w-full sm:w-[768px] mx-auto mt-4 p-4 border">
  <TodoAdd />
  <TodoList />
</div>

</template>

<style scoped></style>
