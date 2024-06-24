<script setup lang="ts">
import { Todo } from '../core/models/Todo';

const props = defineProps<{todo: Todo}>()
</script>

<template>
  <div class="flex w-full py-1 gap-4">
    <p class="leading-10 flex-1">{{props.todo.text}}</p>
    <p class="leading-10 flex-1">{{props.todo.completed}}</p>
    <p class="leading-10 flex-1">{{props.todo.formatDatetime()}}</p>
    <input
      type="checkbox"
      defaultChecked={todo.completed}
      />
    <button
      type="button"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
    >
      -
    </button>
  </div>
</template>