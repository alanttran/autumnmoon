<!-- FAIL :( -->

<script setup>
defineProps({
  markdown: Object, // this is the imported .md file component
})
</script>

<template>
  <div class="content">
    <!-- render the markdown -->
    <component :is="markdown" />
  </div>
</template>

<style scoped>
.content {
  max-width: 432px;
  color: #F5E8D8;
  position: sticky;
  top: 6rem;
  align-self: flex-start; 
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
