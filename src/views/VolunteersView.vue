<template>
  <div class="volunteers">
    <h1>Volunteers</h1>
    <section class="volunteers__content">
      <p>Join our amazing team of volunteers and help make this event a success!</p>

      <div class="volunteers__roles">
        <h2>Volunteer Roles</h2>
        <div class="volunteers__role">
          <h3>Event Setup</h3>
          <p>Help with setting up booths, signage, and event spaces before the event begins.</p>
          <div class="volunteers__time">Time: 2-3 hours before event</div>
        </div>

        <div class="volunteers__role">
          <h3>Registration Desk</h3>
          <p>Assist with checking in attendees and providing information to visitors.</p>
          <div class="volunteers__time">Time: Various shifts during event</div>
        </div>

        <div class="volunteers__role">
          <h3>Event Support</h3>
          <p>Help with general event operations, answering questions, and ensuring smooth flow.</p>
          <div class="volunteers__time">Time: Various shifts during event</div>
        </div>
      </div>

      <div class="volunteers__signup">
        <h2>Sign Up to Volunteer</h2>
        <p>Ready to join our volunteer team? Fill out the form below to get started.</p>
        <button class="volunteers__button">Sign Up Now</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// VolunteersView component logic
</script>

<style scoped>
.volunteers {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.volunteers__content {
  margin-top: 2rem;
}

.volunteers__roles {
  margin: 2rem 0;
}

.volunteers__role {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.volunteers__role h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.volunteers__role p {
  margin: 0 0 1rem 0;
  color: #666;
  line-height: 1.6;
}

.volunteers__time {
  font-size: 0.9rem;
  color: #007bff;
  font-weight: 500;
}

.volunteers__signup {
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #007bff;
  text-align: center;
}

.volunteers__button {
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

.volunteers__button:hover {
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