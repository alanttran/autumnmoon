<script setup>
import Overview from '@/content/boun-om-touk/overview.md'
import History from '@/content/boun-om-touk/history.md'
import Traditions from '@/content/boun-om-touk/traditions.md'
import Food from '@/content/boun-om-touk/food.md'

import OverviewContent from '@/components/OverviewContent.vue'
import LearnContent from '@/components/LearnContent.vue'
import PhotoColumn from '@/components/PhotoColumn.vue'

import boun1 from '@/assets/boun-om-touk/boun-1.png'
import boun2 from '@/assets/boun-om-touk/boun-2.png'
import boun3 from '@/assets/boun-om-touk/boun-3.png'
import boun4 from '@/assets/boun-om-touk/boun-4.jpg'
import boun5 from '@/assets/boun-om-touk/boun-5.jpg'
import boun6 from '@/assets/boun-om-touk/boun-6.png'
import boun7 from '@/assets/boun-om-touk/boun-7.jpg'
import boun8 from '@/assets/boun-om-touk/boun-8.jpg'
import boun9 from '@/assets/boun-om-touk/boun-9.jpg'

</script>

<template>
    <div class="boun-om-touk">
        <header class="hero">
            <div class="hero-content">
                <h1>BOUN OM<br>TOUK</h1>
                <img src="@/assets/boun-om-touk/boun-om-touk.png" alt="Boun Om Touk" width="375" height="auto"/>
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
                      :img1="boun1" :img2="boun2" :img3="boun3" 
                      caption1="King Jayavarman VII" caption2="Tonle Sap River" caption3="Paying tribute to the river goddess Preah Mae Kongkae"
                    />
                </div>
            </section>

            <section class="traditions">
                <div class="content-container">
                    <PhotoColumn
                      :img1="boun4" :img2="boun5" :img3="boun6"
                      caption1="Boat race on the Tonle Sap River" caption2="Ending off the festival with fireworks" caption3="Ambok offering"
                    />
                    <LearnContent :markdown="Traditions" />
                </div>
            </section>

            <section class="food">
                <div class="content-container">
                    <LearnContent :markdown="Food" />
                    <PhotoColumn
                      :img1="boun7":img2="boun8" :img3="boun9" 
                      caption1="Ak Ambok" caption2="Banh chevy" caption3="Nam Ben"
                    />
                </div>
            </section>
        </main>


    </div>

</template>

<style scoped>

.boun-om-touk {
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
    url('@/assets/heros/boun-om-touk-hero.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  color: #F5E8D8;
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
    url('/src/assets/boun-om-touk/boun-om-touk-background.png') no-repeat,
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