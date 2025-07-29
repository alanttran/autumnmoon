<template>
  <svg class="moon-rabbit" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">
    <!-- Moon background -->
    <circle cx="50" cy="50" r="45" fill="#f8f9fa" stroke="#e9ecef" stroke-width="2" />

    <!-- Rabbit body -->
    <ellipse cx="50" cy="60" rx="15" ry="20" fill="#f8f9fa" stroke="#6c757d" stroke-width="1" />

    <!-- Rabbit head -->
    <circle cx="50" cy="40" r="12" fill="#f8f9fa" stroke="#6c757d" stroke-width="1" />

    <!-- Rabbit ears -->
    <ellipse cx="45" cy="25" rx="3" ry="8" fill="#f8f9fa" stroke="#6c757d" stroke-width="1" />
    <ellipse cx="55" cy="25" rx="3" ry="8" fill="#f8f9fa" stroke="#6c757d" stroke-width="1" />

    <!-- Rabbit eyes -->
    <circle cx="47" cy="38" r="1.5" fill="#495057" />
    <circle cx="53" cy="38" r="1.5" fill="#495057" />

    <!-- Rabbit nose -->
    <circle cx="50" cy="42" r="1" fill="#495057" />

    <!-- Rabbit whiskers -->
    <line x1="42" y1="42" x2="38" y2="40" stroke="#6c757d" stroke-width="0.5" />
    <line x1="42" y1="44" x2="38" y2="44" stroke="#6c757d" stroke-width="0.5" />
    <line x1="42" y1="46" x2="38" y2="48" stroke="#6c757d" stroke-width="0.5" />
    <line x1="58" y1="42" x2="62" y2="40" stroke="#6c757d" stroke-width="0.5" />
    <line x1="58" y1="44" x2="62" y2="44" stroke="#6c757d" stroke-width="0.5" />
    <line x1="58" y1="46" x2="62" y2="48" stroke="#6c757d" stroke-width="0.5" />

    <!-- Rabbit paws -->
    <ellipse cx="45" cy="75" rx="2" ry="3" fill="#f8f9fa" stroke="#6c757d" stroke-width="0.5" />
    <ellipse cx="55" cy="75" rx="2" ry="3" fill="#f8f9fa" stroke="#6c757d" stroke-width="0.5" />

    <!-- Moon craters -->
    <circle cx="35" cy="35" r="2" fill="#e9ecef" />
    <circle cx="65" cy="45" r="1.5" fill="#e9ecef" />
    <circle cx="40" cy="60" r="1" fill="#e9ecef" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 50
})
</script>

<style scoped>
.moon-rabbit {
  display: block;
}
</style>