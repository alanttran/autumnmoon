<script setup lang="ts">
// Home page wireframe component
</script>

<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content">
        <h1>Welcome to Autumn Moon</h1>
        <p>Shaping the future through education and innovation</p>
        <button class="cta-button">Learn More</button>
      </div>
    </header>

    <main>
      <section class="features">
        <h2>Why Choose Autumn Moon?</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🎓</div>
            <h3>Academic Excellence</h3>
            <p>Comprehensive curriculum designed for success</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔬</div>
            <h3>Research Focus</h3>
            <p>Cutting-edge research opportunities</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>Global Perspective</h3>
            <p>International partnerships and programs</p>
          </div>
        </div>
      </section>

      <section class="news">
        <h2>Latest News</h2>
        <div class="news-grid">
          <article class="news-card">
            <div class="news-image"></div>
            <h3>New Research Grant Awarded</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article class="news-card">
            <div class="news-image"></div>
            <h3>Student Achievement Recognition</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article class="news-card">
            <div class="news-image"></div>
            <h3>Campus Expansion Plans</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  background: #f5f5f5;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
}

.cta-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
}

main {
  padding: 2rem;
}

.features {
  margin-bottom: 4rem;
}

.features h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
}

.news h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #333;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.news-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.news-image {
  height: 200px;
  background: #e0e0e0;
}

.news-card h3 {
  padding: 1rem;
  margin: 0;
  color: #333;
}

.news-card p {
  padding: 0 1rem 1rem;
  color: #666;
}
</style>
