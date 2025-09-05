<script setup>
defineProps({
  title: String,
  subtext: String,
  to: String
})
</script>

<template>
  <RouterLink :to="to" class="nav__dropdown-card">
    <p class="card-title">{{ title }}</p>
    <p class="card-subtext">{{ subtext }}</p>
    <p class="card-arrow"><span id="right-arrow"></span></p>
  </RouterLink>
</template>

<style scoped>

.nav__dropdown-card {
  color: #111111;
  background: #FFFFFF;
  border: 5px solid transparent;
  box-sizing: border-box;
  transition: border-color 0.1s;
  padding: 11.48px;
  width: 23rem;
  border-radius: 7.65px;
  gap: 7.65px;
}

.nav__dropdown-card:hover {
  border-color: #D0171F;
}

.card-title{
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 1.313rem;
}

.card-subtext {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  height: 3.5rem;
  color: #444444;
}

.card-arrow {
  display: flex;
  justify-content: flex-end;
}

#right-arrow {
  content: "";
  display: inline-block;
  width: 1.313rem;
  height: 1.313rem;

  -webkit-mask: url("@/assets/vectors/right-arrow.svg") no-repeat center;
  mask: url("@/assets/vectors/right-arrow.svg") no-repeat center;

  -webkit-mask-size: contain;
  mask-size: contain;

  background: #111111;
}

.nav__dropdown-card:hover #right-arrow {
  background: #D0171F;
}
</style>