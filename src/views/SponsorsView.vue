<template>
  <div class="sponsors">
    <h1>Sponsors</h1>
    <section class="sponsors__content">
      <p>We're grateful to our generous sponsors who make this event possible.</p>

      <div class="sponsors__tiers">
        <h2>Sponsorship Tiers</h2>

        <div class="sponsors__tier">
          <h3>Platinum Sponsor</h3>
          <p>Our highest level of sponsorship with maximum visibility and benefits.</p>
          <ul class="sponsors__benefits">
            <li>Premium booth location</li>
            <li>Logo on all promotional materials</li>
            <li>Speaking opportunity at opening ceremony</li>
            <li>VIP event access</li>
          </ul>
        </div>

        <div class="sponsors__tier">
          <h3>Gold Sponsor</h3>
          <p>Significant visibility and recognition for your support.</p>
          <ul class="sponsors__benefits">
            <li>Prime booth location</li>
            <li>Logo on event website</li>
            <li>Social media recognition</li>
            <li>Event program listing</li>
          </ul>
        </div>

        <div class="sponsors__tier">
          <h3>Silver Sponsor</h3>
          <p>Great value with solid visibility and recognition.</p>
          <ul class="sponsors__benefits">
            <li>Standard booth location</li>
            <li>Logo on event materials</li>
            <li>Social media mention</li>
            <li>Event program listing</li>
          </ul>
        </div>
      </div>

      <div class="sponsors__contact">
        <h2>Become a Sponsor</h2>
        <p>Interested in sponsoring our event? Contact us to learn more about sponsorship opportunities and benefits.
        </p>
        <button class="sponsors__button">Contact Us</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SponsorsView component logic
</script>

<style scoped>
.sponsors {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.sponsors__content {
  margin-top: 2rem;
}

.sponsors__tiers {
  margin: 2rem 0;
}

.sponsors__tier {
  margin-bottom: 2rem;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.sponsors__tier h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.sponsors__tier p {
  margin: 0 0 1rem 0;
  color: #666;
  line-height: 1.6;
}

.sponsors__benefits {
  margin: 0;
  padding-left: 1.5rem;
  color: #555;
}

.sponsors__benefits li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.sponsors__contact {
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #007bff;
  text-align: center;
}

.sponsors__button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.sponsors__button:hover {
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