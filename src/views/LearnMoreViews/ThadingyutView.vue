<script setup>
import Overview from '@/content/thadingyut/overview.md'
import History from '@/content/thadingyut/history.md'
import Traditions from '@/content/thadingyut/traditions.md'
import Food from '@/content/thadingyut/food.md'

import OverviewContent from '@/components/OverviewContent.vue'
import LearnContent from '@/components/LearnContent.vue'
import PhotoColumn from '@/components/PhotoColumn.vue'

import thadingyut1 from '@/assets/thadingyut/thadingyut-1.png'
import thadingyut2 from '@/assets/thadingyut/thadingyut-2.jpg'
import thadingyut3 from '@/assets/thadingyut/thadingyut-3.jpg'
import thadingyut4 from '@/assets/thadingyut/thadingyut-4.jpg'
import thadingyut5 from '@/assets/thadingyut/thadingyut-5.jpg'
import thadingyut6 from '@/assets/thadingyut/thadingyut-6.png'
import thadingyut7 from '@/assets/thadingyut/thadingyut-7.png'
import thadingyut8 from '@/assets/thadingyut/thadingyut-8.jpg'
import thadingyut9 from '@/assets/thadingyut/thadingyut-9.png'

</script>

<template>
    <div class="thadingyut">
        <header class="hero">
            <div class="hero-content">
                <h1>THADINGYUT</h1>
                <img src="@/assets/thadingyut/thadingyut.png" alt="Thadingyut" width="542" height="auto"/>
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
                      :img1="thadingyut1" :img2="thadingyut2" :img3="thadingyut3" 
                      caption1="Buddha’s descent from Tavatimsa" caption2="Honoring Buddha’s return by lighting candles" caption3="Courtyard glowing with candles for Thadingyut Festival"
                    />
                </div>
            </section>

            <section class="traditions">
                <div class="content-container">
                    <PhotoColumn
                      :img1="thadingyut4" :img2="thadingyut5" :img3="thadingyut6"
                      caption1="Monks lighting candles for Thadingyut" caption2="Crowds gathering at night markets for food" caption3="Children lighting candles to celebrate"
                    />
                    <LearnContent :markdown="Traditions" />
                </div>
            </section>

            <section class="food">
                <div class="content-container">
                    <LearnContent :markdown="Food" />
                    <PhotoColumn
                      :img1="thadingyut7":img2="thadingyut8" :img3="thadingyut9" 
                      caption1="Mont lone yay baw" caption2="Grilled skewers" caption3="Mohinga"
                    />
                </div>
            </section>
        </main>


    </div>

</template>

<style scoped>

.thadingyut {
  min-height: 100vh;
  background-color: #000000;
}

.hero {
  background: 
    linear-gradient(
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0.25) 90%,  
        rgba(0, 0, 0, 0.75) 100%  
    ),
    url('@/assets/heros/thadingyut-hero.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right 20%;
  width: 100%;
  height: 70vh;
  padding: 112px 64px;
}

.hero-content {
  gap: 24px;
  display: flex;
  flex-direction: column;
}

.hero-content h1 {
  font-size: 8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  color: #F5F5F5;
  line-height: 1.2;
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
    linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0)),
    url('/src/assets/thadingyut/thadingyut-background.png') no-repeat,
    url('/src/assets/sky-background.png') repeat;

  background-size: cover, contain, 75%;             
  background-position: center, bottom center, top left; 
}


.content-container {
  display: flex;
  justify-content: center;
  gap: 80px;
}

</style>