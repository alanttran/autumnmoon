<script setup>
import Overview from '@/content/zhongqiu-jie/overview.md'
import History from '@/content/zhongqiu-jie/history.md'
import Traditions from '@/content/zhongqiu-jie/traditions.md'
import Food from '@/content/zhongqiu-jie/food.md'

import OverviewContent from '@/components/OverviewContent.vue'
import LearnContent from '@/components/LearnContent.vue'
import PhotoColumn from '@/components/PhotoColumn.vue'

import zhong1 from '@/assets/zhongqiu-jie/zhong-1.jpg'
import zhong2 from '@/assets/zhongqiu-jie/zhong-2.png'
import zhong3 from '@/assets/zhongqiu-jie/zhong-3.jpg'
import zhong4 from '@/assets/zhongqiu-jie/zhong-4.jpg'
import zhong5 from '@/assets/zhongqiu-jie/zhong-5.jpg'
import zhong6 from '@/assets/zhongqiu-jie/zhong-6.jpg'
import zhong7 from '@/assets/zhongqiu-jie/zhong-7.png'
import zhong8 from '@/assets/zhongqiu-jie/zhong-8.png'
import zhong9 from '@/assets/zhongqiu-jie/zhong-9.jpg'

</script>

<template>
    <div class="zhongqiu-jie">
        <header class="hero">
            <div class="hero-content">
                <h1>ZHŌNGQIŪ<br>JIÉ</h1>
                <img src="@/assets/zhongqiu-jie/zhongqiu-jie.png" alt="Zhongqiu Jie" width="291" height="auto"/>
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
                      :img1="zhong1" :img2="zhong2" :img3="zhong3" 
                      caption1="Book of Rites" caption2="Hou Yi" caption3="Chang’e’s Rabbit"
                    />
                </div>
            </section>

            <section class="traditions">
                <div class="content-container">
                    <PhotoColumn
                      :img1="zhong4" :img2="zhong5" :img3="zhong6"
                      caption1="Lanterns" caption2="Taiwanese BBQ" caption3="Tai Heng Fire Dance"
                    />
                    <LearnContent :markdown="Traditions" />
                </div>
            </section>

            <section class="food">
                <div class="content-container">
                    <LearnContent :markdown="Food" />
                    <PhotoColumn
                      :img1="zhong7":img2="zhong8" :img3="zhong9" 
                      caption1="Mooncakes" caption2="Mooncakes with Custom Animal and Flower Patterns" caption3="Osmanthus Wine"
                    />
                </div>
            </section>
        </main>


    </div>

</template>

<style scoped>

.zhongqiu-jie {
  min-height: 100vh;
  background-color: #000000;
}

.hero {
  background: 
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url('@/assets/heros/lantern-hero.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right 5%;
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
    linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0)),
    url('/src/assets/zhongqiu-jie/zqj.png') no-repeat,
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