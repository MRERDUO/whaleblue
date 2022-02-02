<template>
  <div class="homePage">
    <div class="homePage-header">
      <div class="homePage-carousel">
        <template v-if="list.length">
          <carousel :list="list"></carousel>
        </template>
      </div>
    </div>
    <!-- <content-module></content-module> -->
    <!-- <fixed-module></fixed-module> -->
  </div>
</template>

<script>
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
  },
  created() {
    this.getCarouselImg();
  },
  methods: {
    getCarouselImg() {
      this.axios.get("api/shop/carousel").then((res) => {
        console.log("轮播图图片地址", res.data);
        this.list = res.data.data.map((path, index) => ({ title: index+1, path, url: "#" }));
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