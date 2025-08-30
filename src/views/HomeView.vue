<script>
import MissionStatement from '@/content/mission-statement.md'
export default {
  components: {
    MissionStatement,
  },
};
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
          <MissionStatement />
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
                style="width:362px; height:362px; object-fit:cover;" />
              <img src="@/assets/home-gallery/home-2.jpg" alt="gallery photo 2"
                style="width:362px; height:362px; object-fit:cover;">
            </div>
            <div class="photo-column">
              <img src="@/assets/home-gallery/home-7.png" alt="gallery photo 7"
                style="width:362px; height:203.62px; object-fit:cover;" />
              <img src="@/assets/home-gallery/home-4.jpg" alt="gallery photo 4"
                style="width:362px; height:203.62px; object-fit:cover;">
              <img src="@/assets/home-gallery/home-3.png" alt="gallery photo 3"
                style="width:362px; height:362px; object-fit:cover;">
            </div>
            <div class="photo-column">
              <img src="@/assets/home-gallery/home-5.jpg" alt="gallery photo 5"
                style="width:362px; height:362px; object-fit:cover;" />
              <img src="@/assets/home-gallery/home-6.jpg" alt="gallery photo 6"
                style="width:362px; height:362px; object-fit:cover;">
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
  position: relative;
  background: url('@/assets/homepage-hero.png') no-repeat;
  background-size: cover;
  background-position: right 80%;
  width: 100%;
  height: 100%;
  padding: 120px 64px;

}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  /* dims background */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content h1 {
  font-size: 6.75rem;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  color: #F5E8D8;
  line-height: 1.1;
  letter-spacing: 0%;
  word-break: break-word;
  overflow-wrap: break-word;
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
  width: 100%;
  max-width: 100vw;
}

.mission-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

.mission-container :deep(.mission-content) {
  max-width: 800px;
}

.mission-container :deep(h1) {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #F5E8D8;
  margin-bottom: 16px;
}

.mission-container :deep(p) {
  font-size: 1.125rem;
  font-family: 'Lato', sans-serif;
  color: #F5E8D8;
  margin-bottom: 24px;
  line-height: 1.6;
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
  ;
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
