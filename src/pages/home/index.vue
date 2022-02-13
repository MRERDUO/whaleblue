<template>
  <div class="homePage">
    <div class="homePage-header">
      <div class="homePage-carousel">
        <carousel :list="list"></carousel>
      </div>
      <recommend-module></recommend-module>
    </div>
    
    <!-- <content-module></content-module> -->
    <!-- <fixed-module></fixed-module> -->
  </div>
</template>

<script>
import recommendModule from "./component/recommendModule";
// import contentModule from "./component/contentModule";
// import fixedModule from "./component/fixedModule";
import carousel from "./component/carousel";

export default {
  name: "homePage",
  data() {
    return {
      list: [],
    };
  },
  components: {
    // contentModule,
    // fixedModule,
    carousel,
    recommendModule,
  },
  created() {
    this.getCarouselImg();
  },
  methods: {
    getCarouselImg() {
      this.axios.get("api/shop/carousel").then((res) => {
        this.list = res.data.data.map((path, index) => ({
          title: index + 1,
          path,
          url: "#",
        }));
      });
    },
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
  align-items: center;
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