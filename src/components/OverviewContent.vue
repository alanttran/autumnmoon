<script setup>
defineProps({
  markdown: Object,
})
</script>

<template>
  <div class="overview">
    <component :is="markdown" />
  </div>
</template>

<style scoped>
.overview {
  display: flex;
  flex-direction: column;
  padding: 112px 87px;
}

.overview :deep(h1) {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #F5E8D8;
}

.overview :deep(p) {
  font-size: 1.25rem;
  font-family: 'Lato', sans-serif;
  color: #F5E8D8;
}

.overview :deep(strong),
.overview :deep(b) {
  font-weight: bold;
}

</style>
