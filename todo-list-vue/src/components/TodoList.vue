<script setup lang="ts">
import { store } from "../composables/useStore";
import { Todo } from "../core/models/Todo";
import TodoListItem from "./TodoListItem.vue"
</script>

<template>
<div class="">
  <div class="divide-y">
    <TodoListItem v-for="todo of store.todoList.list" :key="todo.id" :todo="(todo as Todo)"/>
  </div>
</div>
</template>