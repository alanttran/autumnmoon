<script setup>
defineProps({
  markdown: Object,
})
</script>

<template>
  <div class="content">
    <component :is="markdown" />
  </div>
</template>

<style scoped>
.content {
  max-width: 432px;
  color: #F5E8D8;
  position: sticky;
  top: 8rem;
  align-self: flex-start; 
  border-radius: 10px;
  background-color: rgba(17, 17, 17, 0.75);
  box-shadow: 0 0 15px 15px rgba(17, 17, 17, 0.75);
}

.content :deep(h1) {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

.content :deep(p),
.content :deep(li) {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

.content :deep(strong),
.content :deep(b) {
  font-weight: bold;
}
</style>
