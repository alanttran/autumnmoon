<script setup>
import MissionStatement from '@/content/mission-statement.md'
</script>

<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content">
        <h1>2025 SAN DIEGO AUTUMN MOON FESTIVAL</h1>
        <h3>date time location</h3>
        <div class="hero-nav">
          <RouterLink to="/visitor-info" class="nav__link">Visitor Info</RouterLink>
          <RouterLink to="/vendors" class="nav__link">Be a Part of the Festival</RouterLink>
        </div>

      </div>
    </header>

    <main>
      <section class="mission">
        <div class="mission-container">
          <div class="mission-content">
            <MissionStatement />
            <RouterLink to="/learn-more" class="learn-more__link">Learn More About the Different Festivals ➔</RouterLink>
          </div>
          
          <img src="@/assets/amf-poster.png" alt="AMF Poster" width="536" height="auto" />
        </div>

      </section>

      <section class="gallery">
        <div class="gallery-container">
          <div class="gallery-title">
            <h2>GALLERY</h2>
            <p>Check out the photos of last year’s festival!</p>
          </div>
          <div class="gallery-photos">
            <div class="photo-column">
              <img src="@/assets/home-gallery/home-1.png" alt="gallery photo 1"
                style="max-width:100%; height:362px; object-fit:cover;" />
              <img src="@/assets/home-gallery/home-2.jpg" alt="gallery photo 2"
                style="max-width:100%; height:362px; object-fit:cover;">
            </div>
            <div class="photo-column">
              <img src="@/assets/home-gallery/home-7.png" alt="gallery photo 7"
                style="max-width:100%; height:203.62px; object-fit:cover;" />
              <img src="@/assets/home-gallery/home-4.jpg" alt="gallery photo 4"
                style="max-width:100%; height:203.62px; object-fit:cover;">
              <img src="@/assets/home-gallery/home-3.png" alt="gallery photo 3"
                style="max-width:100%; height:362px; object-fit:cover;">
            </div>
            <div class="photo-column">
              <img src="@/assets/home-gallery/home-5.jpg" alt="gallery photo 5"
                style="max-width:100%; height:362px; object-fit:cover;" />
              <img src="@/assets/home-gallery/home-6.jpg" alt="gallery photo 6"
                style="max-width:100%; height:362px; object-fit:cover;">
            </div>
          </div>
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
  background: 
    radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%),
    url('@/assets/heros/homepage-hero.png') no-repeat;
  background-size: cover;
  background-position: right 80%;
  width: 100%;
  height: 80vh;
  padding: 120px 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-content h1 {
  font-size: 6.75rem;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  color: #F5E8D8;
  line-height: 1.1;
  letter-spacing: 0%;
}

.hero-content h3 {
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #F5E8D8;
  line-height: 100%;
  letter-spacing: 0%;
}

.hero-nav {
  display: flex;
  gap: 16px;
}

.nav__link {
  background: #F5E8D8;
  color: #111111;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  cursor: pointer;
}

.nav__link:hover {
  background: #DAA520;
  transition: color 1s, background 1s, border 1s;
}

.mission {
  padding: 112px 64px;
}

.mission-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

.mission-container :deep(.mission-content) {
  max-width: 536px;
}

.mission-container :deep(h1) {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #F5E8D8;
}

.mission-container :deep(p) {
  font-size: 1.125rem;
  font-family: 'Lato', sans-serif;
  color: #F5E8D8;
  margin-bottom: 24px;
}

.learn-more__link {
  background: none;
  color: #F5E8D8;
  border: none;
  font-size: 1.25rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
}

.learn-more__link:hover {
  color: #C11010;
  transition: background 1s;
}

.gallery {
  padding: 112px 64px;
  gap: 80px;
}

.gallery-title {
  text-align: center;
  gap: 16px;
}

.gallery h2 {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #F5E8D8;
  margin-bottom: 16px;
  ;
}

.gallery p {
  font-size: 1.125rem;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #F5E8D8;
  margin-bottom: 80px;
}

.gallery-photos {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.photo-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
