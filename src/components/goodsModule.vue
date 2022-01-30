<template>
  <div class="goodsModule">
    <div class="header">
      <a @click="goListPage" class="header-title">{{ text }}</a>
      <div class="header-right">
        <a v-for="(item, index) of list" :key="index" @click="goListPage">{{ item.name }}</a>
        <a @click="goListPage">查看更多>></a>
      </div>
    </div>
    <img class="i-big" :src="image" alt="" />
    <div class="bottom-box">
      <div
        class="bottom-img-box"
        v-for="(item, index) of box_list"
        :key="index"
      >
        <div class="bottom-img-box-box"  @click="goDetailPage">
          <img 
            class="i-small"  
            @mouseover="mouseOver(index)"
            @mouseleave="mouseLeave(index)"
            :class="{overAnimation:isActive==index,'leaveAnimation':hasError==index}"
            :src="item.image"/>
          <a class="commodityName">{{ item.name }}</a
          ><br />
          <span class="priceText">{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsModule",
  props: ["list", "text", "image", "box_list"],
  data() {
    return {
      isActive:null,
      hasError:null
    };
  },
  methods: {
    mouseOver(index){
      this.isActive = index
      this.hasError = null
    },
    mouseLeave(index){
      this.isActive = null
      this.hasError = index
    },
    goListPage() {
      this.$router.push("/listPage");
    },
    goDetailPage() {
      this.$router.push("/detailPage");
    },
  },
};
</script>

<style scoped>
.goodsModule {
  width: 1000px;
  background-color: #fff;
  padding-bottom: 20px;
  margin-top: 20px;
}

.header {
  padding: 10px;
}

.header-title {
  font-size: 28px;
  font-weight: 900;
  color: #657180;
}

.header-right {
  float: right; 
  margin-top: 20px;
}

.header-right > a {
  margin-left: 20px;
  text-align: center;
  color: #657180;
}

.header-title:hover,
.header-right > a:hover {
  color: #3399ff;
}

.i-big {
  width: 100%;
  height: 310px;
}

.bottom-box {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.bottom-img-box {
  flex: 1;
  display: inline-block;
  background-color: #fff;
  text-align: center;
}

.bottom-img-box-box {
  display: inline-block;
  width: 200px;
  height: 280px;
}

.bottom-img-box-box:hover{
  background-color: #5caeff7e;
  cursor: pointer;
}

.overAnimation{
  animation:mouseOver 1s;
	-webkit-animation:mouseOver 1s;
  animation-fill-mode:forwards;
  -webkit-animation-fill-mode:forwards; 
}

.leaveAnimation{
  animation:mouseLeave 1s;
	-webkit-animation:mouseLeave 1s;
}

@keyframes mouseOver
{
	from {transform: scale(100%);}
	to {transform: scale(105%);}
}

@-webkit-keyframes mouseOver /* Safari and Chrome */
{
	from {transform: scale(100%);}
	to {transform: scale(105%);}
}


@keyframes mouseLeave
{
	from {transform: scale(105%);}
	to {transform: scale(100%);}
}

@-webkit-keyframes mouseLeave /* Safari and Chrome */
{
	from {transform: scale(105%);}
	to {transform: scale(100%);}
}

.i-small {
  width: inherit;
}

.commodityName {
  display: inline-block;
  margin-top: 5px;
  width: 150px;
  font-size: 13px;
  color: #333;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.commodityName:hover {
  color: #3399ff;
}

.priceText {
  color: red;
  font-size: 13px;
}
</style>