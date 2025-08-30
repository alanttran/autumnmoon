<script setup lang="ts">
// Zhongqiu Jie page wireframe component
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
                    <div class="overview-content">
                        <h2>OVERVIEW</h2>
                        <p>Content coming soon!</p>
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
  background: url('@/assets/heros/lantern-hero.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right 5%;
  width: 100%;
  height: 700px;
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

</style>