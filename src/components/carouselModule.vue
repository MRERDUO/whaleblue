<template>
  <div class="carouselModule">
    <Carousel
      v-model="value1"
      autoplay
      autoPlay-speed="3000"
      trigger="hover"
      width="1000px"
    >
      <Carousel-item>
        <img class="i-carousel" src="@/assets/lunbo1.jpeg" alt="" />
      </Carousel-item>
      <Carousel-item>
        <img class="i-carousel" src="@/assets/lunbo2.jpeg" alt="" />
      </Carousel-item>
      <Carousel-item>
        <img class="i-carousel" src="@/assets/lunbo3.jpeg" alt="" />
      </Carousel-item>
      <Carousel-item>
        <img class="i-carousel" src="@/assets/lunbo4.jpeg" alt="" />
      </Carousel-item>
    </Carousel>
  </div>
</template>


<script>
export default {
  name: "carouselModule",
  data() {
    return {
        value1:0
    };
  },
};
</script>

<style scoped>
.i-carousel {
  width: 100%;
}
</style>