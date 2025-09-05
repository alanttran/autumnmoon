<script setup>
defineProps({
  img1: String,
  img2: String,
  img3: String,
  caption1: String,
  caption2: String,
  caption3: String
})
</script>

<template>
    <div class="photo-column">
        <img :src="img1" alt="gallery photo 1"
        style="width:600px; height:600px; object-fit:cover; border-radius: 20px;" />
        <p class="photo-caption">{{ caption1 }}</p>

        <img :src="img2" alt="gallery photo 2"
        style="width:600px; height:600px; object-fit:cover; border-radius: 20px;">
        <p class="photo-caption">{{ caption2 }}</p>

        <img :src="img3" alt="gallery photo 3"
        style="width:600px; height:600px; object-fit:cover; border-radius: 20px;">
        <p class="photo-caption">{{ caption3 }}</p>
    </div>


</template>

<style scoped>
.photo-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.photo-caption {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  color: #FFFFFF;
  background-color: rgba(17, 17, 17, 0.75);
  box-shadow: 0 0 15px 10px rgba(17, 17, 17, 0.75);
  border-radius: 5px;
  width: max-content;

}
</style>

