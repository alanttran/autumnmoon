<script>
import Overview from '@/content/zhongqiu-jie/overview.md'
import History from '@/content/zhongqiu-jie/history.md'
import Traditions from '@/content/zhongqiu-jie/traditions.md'
import Food from '@/content/zhongqiu-jie/food.md'

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

export default {
  components: { Overview, History, Traditions, Food, PhotoColumn },
  setup() {
    return { zhong1, zhong2, zhong3, zhong4, zhong5, zhong6, zhong7, zhong8, zhong9}
  },
}

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
  position: relative;
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
    url('/src/assets/zhongqiu-jie/zqj.png') no-repeat bottom center,
    url('/src/assets/sky-background.png') repeat;

  background-size: contain, 75%; /* lantern scales, sky zoom level */
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