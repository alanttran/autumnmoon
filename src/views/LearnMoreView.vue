<script setup>
import Background from '@/content/background.md'

import LearnContent from '@/components/LearnContent.vue'
import PhotoColumn from '@/components/PhotoColumn.vue'

import img1 from '@/assets/home-gallery/home-2.jpg'
import img2 from '@/assets/home-gallery/home-5.jpg'
import img3 from '@/assets/home-gallery/home-6.jpg'

</script>

<template>
    <div class="learn-more">
        <div class="learn-about-amf">
            <h1>LEARN ABOUT AMF</h1>
            <p>Explore our interactive map to see where different Autumn Moon Festival traditions originate. From history to food, learn more about how different communities honor the moon and harvest.</p>
            <div class="map"></div>
        </div>
        
        <div class="learn-more-content">
            <div class="history">
                <h2>HISTORY OF SAN DIEGO AMF</h2>
                <p>The San Diego Autumn Moon Festival is a celebration of tradition, community, and the moon.</p>
            </div>
            <div class="background">
                <div class="background-container">
                    <LearnContent :markdown="Background" />
                    <PhotoColumn
                      :img1="img1" :img2="img2" :img3="img3" 
                    />
                </div>
            </div>
            
        </div>
        
    </div>

</template>

<style scoped>

.learn-more {
  min-height: 100vh;
  width: 100%;
}

.learn-about-amf{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 112px 64px;
    gap: 32px;
}

.learn-about-amf h1 {
    font-size: 7rem;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    color: #F5E8D8;
     line-height: 1.1;
    letter-spacing: 0%;
}

.learn-about-amf p {
    max-width: 910px;
    font-size: 1.25rem;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    color: #F5E8D8;
}

.background {
    gap: 80px;
}

.learn-more-content{
    padding: 112px 64px;
    gap: 80px;
}

.history {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
}

.history h2 {
    font-size: 4rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #F5E8D8;
}

.history p {
    font-size:1.125rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #F5E8D8;
}

.background {
    padding: 112px 0;
}

.background-container {
  display: flex;
  justify-content: center;
  gap: 80px;
}


</style>