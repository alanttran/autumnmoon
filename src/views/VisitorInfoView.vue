<template>
  <div class="visitor-info">
    <h1>Visitor Information</h1>
    <section class="visitor-info__content">
      <p>Welcome to our event! Here you'll find all the information you need to make the most of your visit.</p>

      <div class="visitor-info__section">
        <h2>Getting Here</h2>
        <p>Information about location, parking, and transportation options.</p>
      </div>

      <div class="visitor-info__section">
        <h2>What to Expect</h2>
        <p>Details about the event schedule, activities, and what to bring.</p>
      </div>

      <div class="visitor-info__section">
        <h2>Accessibility</h2>
        <p>Information about accessibility features and accommodations.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// VisitorInfoView component logic
</script>

<style scoped>
.visitor-info {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.visitor-info__content {
  margin-top: 2rem;
}

.visitor-info__section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

h2 {
  color: #555;
  margin-bottom: 0.5rem;
}

p {
  line-height: 1.6;
  color: #666;
}
</style>