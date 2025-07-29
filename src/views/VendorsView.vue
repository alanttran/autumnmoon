<template>
  <div class="vendors">
    <h1>Vendors</h1>
    <section class="vendors__content">
      <p>Discover amazing vendors and exhibitors at our event.</p>

      <div class="vendors__grid">
        <div class="vendors__vendor">
          <h3>Vendor Name 1</h3>
          <p>Description of vendor and their products or services.</p>
          <div class="vendors__category">Category: Food & Beverage</div>
        </div>

        <div class="vendors__vendor">
          <h3>Vendor Name 2</h3>
          <p>Description of vendor and their products or services.</p>
          <div class="vendors__category">Category: Arts & Crafts</div>
        </div>

        <div class="vendors__vendor">
          <h3>Vendor Name 3</h3>
          <p>Description of vendor and their products or services.</p>
          <div class="vendors__category">Category: Technology</div>
        </div>
      </div>

      <div class="vendors__info">
        <h2>Become a Vendor</h2>
        <p>Interested in becoming a vendor at our event? Contact us for more information about booth availability and
          pricing.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// VendorsView component logic
</script>

<style scoped>
.vendors {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.vendors__content {
  margin-top: 2rem;
}

.vendors__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.vendors__vendor {
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.vendors__vendor h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.vendors__vendor p {
  margin: 0 0 1rem 0;
  color: #666;
  line-height: 1.6;
}

.vendors__category {
  font-size: 0.9rem;
  color: #007bff;
  font-weight: 500;
}

.vendors__info {
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

h2 {
  color: #555;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  color: #666;
}
</style>