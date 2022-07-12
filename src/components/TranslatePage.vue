<script setup lang="ts">
import { ref } from 'vue';

const category = ref()
</script>

<template>
    <div class="gap-8 columns-2 container mx-auto bg-indigo-50 p-2">
      <div class="auto-cols-auto">
         <div class="flex justify-start py-2">
            <select v-model="category">
              <option value="Array">Array</option>
              <option value="Queue">Queue</option>
              <option value="Priority Queue">Priority Queue</option>
              <option value="Linked List">Linked List</option>
            </select>
         </div>
         <div>
            <textarea name="Input" class="w-full max-h-screen"></textarea>
          </div>
      </div>
      <div class="auto-cols-auto">
         <div class="flex justify-start py-2">
            <select v-model="category">
              <option value="Array">Array</option>
              <option value="Queue">Queue</option>
              <option value="Priority Queue">Priority Queue</option>
              <option value="Linked List">Linked List</option>
            </select>
         </div>
         <div>
            <textarea name="Input" class="w-full max-h-screen"></textarea>
          </div>
      </div>
    </div>
    <div class="py-3">
      <button class="bg-indigo-50">Translate</button>
    </div>
</template>

<style scoped>

</style>
