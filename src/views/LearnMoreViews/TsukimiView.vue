<script setup>
import Overview from '@/content/tsukimi/overview.md'
import History from '@/content/tsukimi/history.md'
import Traditions from '@/content/tsukimi/traditions.md'
import Food from '@/content/tsukimi/food.md'

import OverviewContent from '@/components/OverviewContent.vue'
import LearnContent from '@/components/LearnContent.vue'
import PhotoColumn from '@/components/PhotoColumn.vue'

import tsukimi1 from '@/assets/tsukimi/tsukimi-1.jpg'
import tsukimi2 from '@/assets/tsukimi/tsukimi-2.png'
import tsukimi3 from '@/assets/tsukimi/tsukimi-3.jpg'
import tsukimi4 from '@/assets/tsukimi/tsukimi-4.jpg'
import tsukimi5 from '@/assets/tsukimi/tsukimi-5.png'
import tsukimi6 from '@/assets/tsukimi/tsukimi-6.jpg'
import tsukimi7 from '@/assets/tsukimi/tsukimi-7.png'
import tsukimi8 from '@/assets/tsukimi/tsukimi-8.jpg'
import tsukimi9 from '@/assets/tsukimi/tsukimi-9.png'

</script>

<template>
    <div class="chuseok">
        <header class="hero">
            <div class="hero-content">
                <h1>TSUKIMI</h1>
                <img src="@/assets/tsukimi/tsukimi.png" alt="Tsukimi" width="252" height="auto"/>
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
                      :img1="tsukimi1" :img2="tsukimi2" :img3="tsukimi3" 
                      caption1="Traditional boat lit for Tsukimi celebrations" caption2="Rabbits Pounding Mochi On the Moon" caption3="Tsukuyomi, the Moon God"
                    />
                </div>
            </section>

            <section class="traditions">
                <div class="content-container">
                    <PhotoColumn
                      :img1="tsukimi4" :img2="tsukimi5" :img3="tsukimi6"
                      caption1="Moon Viewing" caption2="Sususki - On the Right" caption3="Tsukimi Themed Concerts Playing Traditional Japanese Music"
                    />
                    <LearnContent :markdown="Traditions" />
                </div>
            </section>

            <section class="food">
                <div class="content-container">
                    <LearnContent :markdown="Food" />
                    <PhotoColumn
                      :img1="tsukimi7":img2="tsukimi8" :img3="tsukimi9" 
                      caption1="Dango" caption2="Udon" caption3="Mcdonal’ds Tsukimi Special Item, Moon Themed Quarter Pounder"
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
    url('@/assets/heros/tsukimi-hero.png');
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
    url('/src/assets/tsukimi/tsukimi-background.png') no-repeat,
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