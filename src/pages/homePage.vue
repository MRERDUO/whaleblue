<template>
  <div class="homePage">
    <div class="homePage-header">
      <div class="homePage-carousel">
        <carousel :list="list"></carousel>
      </div>
    </div>
    <content-module></content-module>
    <fixed-module></fixed-module>
  </div>
</template>

<script>
import headerModule from "@/components/headerModule";
import footerModule from "@/components/footerModule";
import carouselModule from "@/components/carouselModule";
import contentModule from "@/components/contentModule";
import FixedModule from "../components/fixedModule.vue";
import Carousel from "../components/carousel.vue";

export default {
  name: "homePage",
  data() {
    return {
      list: [
        {
          title: "1",
          path: require("@/assets/lunbo1.jpeg"),
          url: "#",
        },
        {
          title: "2",
          path: require("@/assets/lunbo2.jpeg"),
          url: "#",
        },
        {
          title: "3",
          path: require("@/assets/lunbo3.jpeg"),
          url: "#",
        },
        {
          title: "4",
          path: require("@/assets/lunbo4.jpeg"),
          url: "#",
        }
      ],
    };
  },
  components: {
    "header-module": headerModule,
    "footer-module": footerModule,
    "carousel-module": carouselModule,
    "content-module": contentModule,
    FixedModule,
    Carousel,
  },
};
</script>

<style scoped>
.homePage-header {
  width: 100%;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
}

.homePage {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.homePage-carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 1px;
}

.carousel {
  cursor: pointer;
}
</style>