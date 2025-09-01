<script setup>
import Overview from '@/content/boun-that-luang/overview.md'
import History from '@/content/boun-that-luang/history.md'
import Traditions from '@/content/boun-that-luang/traditions.md'
import Food from '@/content/boun-that-luang/food.md'

import OverviewContent from '../components/OverviewContent.vue'
import LearnContent from '../components/LearnContent.vue'
import PhotoColumn from '@/components/PhotoColumn.vue'

import luang1 from '@/assets/boun-that-luang/luang-1.jpg'
import luang2 from '@/assets/boun-that-luang/luang-2.jpg'
import luang3 from '@/assets/boun-that-luang/luang-3.jpg'
import luang4 from '@/assets/boun-that-luang/luang-4.jpg'
import luang5 from '@/assets/boun-that-luang/luang-5.jpg'
import luang6 from '@/assets/boun-that-luang/luang-6.jpg'
import luang7 from '@/assets/boun-that-luang/luang-7.jpg'
import luang8 from '@/assets/boun-that-luang/luang-8.jpg'
import luang9 from '@/assets/boun-that-luang/luang-9.jpg'

</script>

<template>
    <div class="boun-that-luang">
        <header class="hero">
            <div class="hero-content">
                <h1>BOUN THAT<br>LUANG</h1>
                <img src="@/assets/boun-that-luang/boun-that-luang.png" alt="Zhongqiu Jie" width="575" height="auto"/>
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
                      :img1="luang1" :img2="luang2" :img3="luang3" 
                      caption1="Wax castle procession" caption2="Shrine dedicated to Nang Si" caption3="Offering procession"
                    />
                </div>
            </section>

            <section class="traditions">
                <div class="content-container">
                    <PhotoColumn
                      :img1="luang4" :img2="luang5" :img3="luang6"
                      caption1="Laos game of tikhy being played in the 1900s" caption2="Crowds gathering to give gifts to monks" caption3="Candlelight procession"
                    />
                    <LearnContent :markdown="Traditions" />
                </div>
            </section>

            <section class="food">
                <div class="content-container">
                    <LearnContent :markdown="Food" />
                    <PhotoColumn
                      :img1="luang7":img2="luang8" :img3="luang9" 
                      caption1="Khao Poun" caption2="Khao Niew" caption3="Jaew Bong"
                    />
                </div>
            </section>
        </main>


    </div>

</template>

<style scoped>

.boun-that-luang {
  min-height: 100vh;
  background-color: #000000;
}

.hero {
  background: 
    linear-gradient(
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0.25) 60%,
        rgba(0, 0, 0, 0.70) 95%,
        rgba(0, 0, 0, 1) 100%
    ),
    url('@/assets/heros/boun-that-hero.png');
  background-size: 80%;
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
    linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url('/src/assets/boun-that-luang/boun-that-backround.png') no-repeat,
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