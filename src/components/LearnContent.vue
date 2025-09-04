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
  background:radial-gradient(circle at center, rgba(17,17,17,0.75) 60%, rgba(17,17,17,0) 100%);
  border-radius: 10px;
  padding-bottom: 16px;
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
