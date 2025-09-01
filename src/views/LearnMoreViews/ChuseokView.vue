<script setup>
import Overview from '@/content/chuseok/overview.md'
import History from '@/content/chuseok/history.md'
import Traditions from '@/content/chuseok/traditions.md'
import Food from '@/content/chuseok/food.md'

import OverviewContent from '@/components/OverviewContent.vue'
import LearnContent from '@/components/LearnContent.vue'
import PhotoColumn from '@/components/PhotoColumn.vue'

import chuseok1 from '@/assets/chuseok/chuseok-1.png'
import chuseok2 from '@/assets/chuseok/chuseok-2.jpg'
import chuseok3 from '@/assets/chuseok/chuseok-3.jpg'
import chuseok4 from '@/assets/chuseok/chuseok-4.jpg'
import chuseok5 from '@/assets/chuseok/chuseok-5.jpg'
import chuseok6 from '@/assets/chuseok/chuseok-6.jpg'
import chuseok7 from '@/assets/chuseok/chuseok-7.jpg'
import chuseok8 from '@/assets/chuseok/chuseok-8.jpg'
import chuseok9 from '@/assets/chuseok/chuseok-9.jpg'

</script>

<template>
    <div class="chuseok">
        <header class="hero">
            <div class="hero-content">
                <h1>CHUSEOK</h1>
                <img src="@/assets/chuseok/chuseok.png" alt="Chuseok" width="239" height="auto"/>
            </div>
        </header>

        <main>
            <section class="overview">
                <OverviewContent :markdown="Overview" />
            </section>

            <section class="history">
                <div class="content-container">
                    <LearnContent :markdown="History" />
                    <PhotoColumn
                      :img1="chuseok1" :img2="chuseok2" :img3="chuseok3" 
                      caption1="Family Gathering in the 1900’s" caption2="Chuseok in the 1900’s" caption3="Grapevine Painting - 1700’s"
                    />
                </div>
            </section>

            <section class="traditions">
                <div class="content-container">
                    <PhotoColumn
                      :img1="chuseok4" :img2="chuseok5" :img3="chuseok6"
                      caption1="Charye" caption2="Seongmyo" caption3="Yootnori"
                    />
                    <LearnContent :markdown="Traditions" />
                </div>
            </section>

            <section class="food">
                <div class="content-container">
                    <LearnContent :markdown="Food" />
                    <PhotoColumn
                      :img1="chuseok7":img2="chuseok8" :img3="chuseok9" 
                      caption1="Jeon" caption2="Songpyeon" caption3="Family Gatherings in Korea"
                    />
                </div>
            </section>
        </main>


    </div>

</template>

<style scoped>

.chuseok {
  min-height: 100vh;
  background-color: #000000;
}

.hero {
  background: 
    linear-gradient(
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0.25) 60%,  
        rgba(0, 0, 0, 0.85) 100%  
    ),
    url('@/assets/heros/chuseok-hero.png');
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
  color: #F5E8D8;
  line-height: 1.2;
  margin-bottom: 16px;
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
    url('/src/assets/chuseok/korean-lantern.png') no-repeat,
    url('/src/assets/sky-background.png') repeat;

  background-size: contain, 75%;
  background-position: bottom center, top left;
}

.content-container {
  display: flex;
  justify-content: center;
  gap: 80px;
}

</style>