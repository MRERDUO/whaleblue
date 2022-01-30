<template>
  <div class="shopPageHeaderModule">
    <div class="shopPage-header">
      <div class="shopPage-header-left">
        <img src="../assets/youhuiquan.png" alt="" />
        <span>购物车可领优惠券</span>
      </div>
      <div class="shopPage-header-right" @click="openExtend">
        <span>领券</span>
        <img :src="arrowsImg" />
      </div>
    </div>
    <div class="shopPage-header-extendBox" v-show="show">
      暂时没有可领的优惠券
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrowsImg: require("../assets/downArrows.png"),
      downArrowsImg: require("../assets/downArrows.png"),
      upArrowsImg: require("../assets/upArrows.png"),
      show: false,
    };
  },
  methods: {
    openExtend() {
      if (this.arrowsImg == this.downArrowsImg) {
        this.arrowsImg = this.upArrowsImg;
      } else {
        this.arrowsImg = this.downArrowsImg;
      }
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.shopPage-header {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid #d7dde4;
  justify-content: space-between;
}

.shopPage-header-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.shopPage-header-left > img {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
}

.shopPage-header-left > span {
  font-size: 14px;
  color: #333333;
}

.shopPage-header-right {
  display: flex;
  width: 80px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #3399ff;
  padding: 15px;
}

.shopPage-header-right:hover {
  cursor: pointer;
}

.shopPage-header-right > span {
  margin-right: 10px;
  color: #fff;
  font-size: 12px;
}

.shopPage-header-right > img {
  width: 15px;
  height: 15px;
}

.shopPage-header-extendBox {
  width: 1000px;
  height: 156px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  border: 1px solid #d7dde4;
  border-top: 0px;
}
</style>