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
          <RouterLink to="/" class="nav__link">HOME</RouterLink>
          <RouterLink to="/donate" class="nav__link">DONATIONS</RouterLink>
          <RouterLink to="/contact-us" class="nav__link">CONTACT US</RouterLink>
          <div class="nav__dropdown">
            <RouterLink to="/learn-more" class="nav__link">LEARN MORE ˅</RouterLink>
            <div class="nav__dropdown-content">
              <!-- todo -->
            </div>
          </div>
          <div class="nav__dropdown">
            <button class="nav__link">VISITOR INFO ˅</button>
            <div class="nav__dropdown-content">
              <RouterLink to="/visitor-info" class="nav__link">Visitor Info</RouterLink>
              <RouterLink to="/schedule" class="nav__link">Schedule</RouterLink>
              <RouterLink to="/vendors" class="nav__link">Vendors</RouterLink>
            </div>
          </div>
          <div class="nav__dropdown">
            <button class="nav__link">JOIN THE FESTIVAL ˅</button>
            <div class="nav__dropdown-content">
              <RouterLink to="/volunteers" class="nav__link">Volunteers</RouterLink>
              <RouterLink to="/sponsors" class="nav__link">Sponsors</RouterLink>
            </div>
          </div>
          
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
  background-color: #1C1C1C;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__content {
  width: 100vw;
  margin: 0 auto;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

}

.logo {
  height: 50px;
  width: auto;
  margin: 0 4rem;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Lato', sans-serif;
}

.nav__link {
  display: inline-block;
  padding: 0.75rem 0.75rem;
  text-decoration: none;
  color: #F5E8D8;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 6px;
  margin: 0 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
}

.nav__link:hover {
  color: #D0171F;
}

.nav__link.router-link-active,
.nav__link.router-link-exact-active {
  color: #D0171F;
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

.nav__dropdown {
  position: relative;
  display: inline-block;
}

.nav__dropdown-content {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background: #fff;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  border-radius: 6px;
  z-index: 10;
  margin-top: 0.5rem;
}

.nav__dropdown:hover .nav__dropdown-content,
.nav__dropdown:focus-within .nav__dropdown-content {
  display: flex;
}
</style>
