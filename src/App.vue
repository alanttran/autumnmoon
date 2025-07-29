<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MoonRabbit from './components/MoonRabbit.vue'
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header__content">
        <img src="./assets/rabbit.png" alt="Autumn Moon" class="logo" />

        <nav class="nav">
          <RouterLink to="/" class="nav__link">Home</RouterLink>
          <RouterLink to="/visitor-info" class="nav__link">Visitor Info</RouterLink>
          <RouterLink to="/schedule" class="nav__link">Schedule</RouterLink>
          <RouterLink to="/vendors" class="nav__link">Vendors</RouterLink>
          <RouterLink to="/volunteers" class="nav__link">Volunteers</RouterLink>
          <RouterLink to="/sponsors" class="nav__link">Sponsors</RouterLink>
          <RouterLink to="/donate" class="nav__link">Donate</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
:root {
  background-color: white;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 50px;
  width: auto;
  margin: 0;
}

.nav {
  display: flex;
  gap: 0;
  align-items: center;
}

.nav__link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 6px;
  margin: 0 0.25rem;
}

.nav__link:hover {
  color: #007bff;
  background-color: #f8f9fa;
}

.nav__link.router-link-active,
.nav__link.router-link-exact-active {
  color: #007bff;
  background-color: #e3f2fd;
}

.main {
  flex: 1;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .header__content {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .nav__link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
