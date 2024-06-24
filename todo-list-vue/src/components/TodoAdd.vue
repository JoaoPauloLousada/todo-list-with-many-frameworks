<template>
  <div class="flex gap-4">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    >
      +
    </button>
  </div>
  <form
      class="w-full flex flex-1 gap-4"
    >
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Todo text"
      />
      <input
        type="datetime-local"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        confirm
      </button>
      <button
        type="button"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
      >
        cancel
      </button>
    </form>
</template>