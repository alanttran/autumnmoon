<template>
  <div class="donate">
    <h1>Donate</h1>
    <section class="donate__content">
      <p>Your support helps us continue providing amazing events and experiences for our community.</p>

      <div class="donate__info">
        <h2>Why Donate?</h2>
        <p>Your donations help us:</p>
        <ul class="donate__benefits">
          <li>Keep event costs affordable for attendees</li>
          <li>Provide scholarships for participants</li>
          <li>Improve event facilities and amenities</li>
          <li>Support local community initiatives</li>
        </ul>
      </div>

      <div class="donate__form">
        <h2>Make a Donation</h2>
        <form class="donate__form-content">
          <div class="donate__form-group">
            <label for="amount">Donation Amount</label>
            <select id="amount" class="donate__select">
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
              <option value="250">$250</option>
              <option value="500">$500</option>
              <option value="custom">Custom Amount</option>
            </select>
          </div>

          <div class="donate__form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" class="donate__input" placeholder="Enter your full name">
          </div>

          <div class="donate__form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" class="donate__input" placeholder="Enter your email">
          </div>

          <div class="donate__form-group">
            <label>
              <input type="checkbox" class="donate__checkbox">
              I would like to receive updates about future events
            </label>
          </div>

          <button type="submit" class="donate__button">Donate Now</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// DonateView component logic
</script>

<style scoped>
.donate {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.donate__content {
  margin-top: 2rem;
}

.donate__info {
  margin: 2rem 0;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.donate__benefits {
  margin: 1rem 0 0 0;
  padding-left: 1.5rem;
  color: #555;
}

.donate__benefits li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.donate__form {
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.donate__form-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.donate__form-group {
  display: flex;
  flex-direction: column;
}

.donate__form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.donate__input,
.donate__select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.donate__input:focus,
.donate__select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.donate__checkbox {
  margin-right: 0.5rem;
}

.donate__button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.donate__button:hover {
  background-color: #0056b3;
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