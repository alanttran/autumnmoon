<template>
  <div class="schedule">
    <h1>Event Schedule</h1>
    <section class="schedule__content">
      <p>Check out the full schedule of events, workshops, and activities.</p>

      <div class="schedule__day">
        <h2>Day 1 - Opening</h2>
        <div class="schedule__event">
          <time class="schedule__time">9:00 AM</time>
          <div class="schedule__details">
            <h3>Registration & Check-in</h3>
            <p>Welcome desk opens for participant registration</p>
          </div>
        </div>
        <div class="schedule__event">
          <time class="schedule__time">10:00 AM</time>
          <div class="schedule__details">
            <h3>Opening Ceremony</h3>
            <p>Welcome speech and event overview</p>
          </div>
        </div>
      </div>

      <div class="schedule__day">
        <h2>Day 2 - Main Events</h2>
        <div class="schedule__event">
          <time class="schedule__time">9:00 AM</time>
          <div class="schedule__details">
            <h3>Workshops Begin</h3>
            <p>Various workshops and activities throughout the day</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// ScheduleView component logic
</script>

<style scoped>
.schedule {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.schedule__content {
  margin-top: 2rem;
}

.schedule__day {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.schedule__event {
  display: flex;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 6px;
}

.schedule__time {
  font-weight: bold;
  color: #007bff;
  min-width: 80px;
  margin-right: 1rem;
}

.schedule__details h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.schedule__details p {
  margin: 0;
  color: #666;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

h2 {
  color: #555;
  margin-bottom: 1rem;
}
</style>