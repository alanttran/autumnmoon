<script setup>
import Overview from '@/content/tet-trung/overview.md'
import History from '@/content/tet-trung/history.md'
import Traditions from '@/content/tet-trung/traditions.md'
import Food from '@/content/tet-trung/food.md'

import PhotoColumn from '@/components/PhotoColumn.vue'

import tet1 from '@/assets/tet-trung/tet-1.jpg'
import tet2 from '@/assets/tet-trung/tet-2.png'
import tet3 from '@/assets/tet-trung/tet-3.png'
import tet4 from '@/assets/tet-trung/tet-4.jpg'
import tet5 from '@/assets/tet-trung/tet-5.jpg'
import tet6 from '@/assets/tet-trung/tet-6.jpg'
import tet7 from '@/assets/chuseok/chuseok-7.jpg'
import tet8 from '@/assets/chuseok/chuseok-8.jpg'
import tet9 from '@/assets/chuseok/chuseok-9.jpg'

</script>

<template>
    <div class="tet-trung">
        <header class="hero">
            <div class="hero-content">
                <h1>TẾT FESTIVAL</h1>
                <img src="@/assets/tet-trung/tet.png" alt="Tet Trung" width="592" height="auto"/>
            </div>
        </header>

        <main>
            <section class="overview">
                <div class="overview-container">
                    <Overview />
                </div>
            </section>

            <section class="history">
                <div class="content-container">
                    <div class="content-text">
                        <History />
                    </div>
                    <PhotoColumn
                      :img1="tet1" :img2="tet2" :img3="tet3" 
                      caption1="Tet Tru Thung Being Celebrated in the 1800’s" caption2="Chu Cuoi" caption3="Children’s Parade"
                    />
                </div>
            </section>

            <section class="traditions">
                <div class="content-container">
                    <PhotoColumn
                      :img1="tet4" :img2="tet5" :img3="tet6"
                      caption1="Children carrying star lantern, symbolizing purity" caption2="Fish lantern" caption3="Múa lân, the traditional lion dance"
                    />
                    <div class="content-text">
                        <Traditions />
                    </div>
                </div>
            </section>

            <section class="food">
                <div class="content-container">
                    <div class="content-text">
                        <Food />
                    </div>
                    <PhotoColumn
                      :img1="tet7":img2="tet8" :img3="tet9" 
                      caption1="Banh Trung Thu" caption2="Dau Xahn Vung" caption3="Tet Festival Feast"
                    />
                </div>
            </section>
        </main>


    </div>

</template>

<style scoped>

.tet-trung {
  min-height: 100vh;
  background-color: #000000;
}

.hero {
  background: 
    linear-gradient(
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0.25) 60%,  
        rgba(0, 0, 0, 1) 100%  
    ),
    url('@/assets/heros/tet-hero.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 70vh;
  padding: 112px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content h1 {
  font-size: 8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  color: #F5F5F5;
  line-height: 1.2;
  margin-bottom: 16px;
}

.overview {
  padding: 112px 87px;
}

.overview-container {
  display: flex;
  flex-direction: column;
}

.overview-container :deep(h1) {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #F5E8D8;
}

.overview-container :deep(p) {
  font-size: 1.25rem;
  font-family: 'Lato', sans-serif;
  color: #F5E8D8;
}

.overview-container :deep(strong),
.overview-container :deep(b) {
  font-weight: bold;
}

.history {
  padding: 112px 64px;
  background: url('@/assets/sky-background.png');
  background-size: 75%;
}

.traditions {
  padding: 112px 64px;
  background: url('@/assets/sky-background.png');
  background-size: 75%;
}

.food {
  padding: 112px 64px;

  background:
    url('/src/assets/tet-trung/tet-background.png') no-repeat bottom center,
    url('/src/assets/sky-background.png') repeat;

  background-size: contain, 75%;
  background-position: bottom center, top left;
}

.content-container {
  display: flex;
  justify-content: center;
  gap: 80px;
}

.content-text {
  max-width: 432px;
  color: #F5E8D8;
  position: sticky;
  top: 8rem;
  align-self: flex-start; 
}

.content-container :deep(h1) {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  
}

.content-container :deep(p),
.content-container :deep(li) {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

.content-container :deep(strong),
.content-container :deep(b) {
  font-weight: bold;
}

</style>