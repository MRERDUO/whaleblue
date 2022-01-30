<template>
  <div class="listPageContent-module">
    <h1>{{ title }}</h1>
    <p>{{ smallTitle }}</p>
    <div class="listPageContent-module-content">
      <div
        class="content-imgBox"
        v-for="(item, index) of imgBox_list"
        :key="index"
        @click="goDetailPage"
      >
        <img
          :src="item.img"
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
          :class="{
            overAnimation: isActive == index,
            leaveAnimation: hasError == index,
          }"
        />
        <div class="content-imgBox-textBox">
          <p>{{ item.title }}</p>
          <span>￥{{ item.price }}</span>
          <hr style="width: 50%; border: 1px solid #e9eaec" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listPageContent-module",
  data() {
    return {
      isActive: null,
      hasError: null,
      title: "收纳家饰",
      smallTitle: "居家达人，收纳巧思",
      imgBox_list: [
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
        {
          img: require("../assets/shangpin1.jpeg"),
          title: "衣柜省空间神器，棉麻涤 收纳挂袋",
          price: 55,
          text: "实用棉麻，悬挂牢固",
        },
      ],
    };
  },
  methods: {
    mouseOver(index) {
      this.isActive = index;
      this.hasError = null;
    },
    mouseLeave(index) {
      this.isActive = null;
      this.hasError = index;
    },
    goDetailPage() {
      this.$router.push("/detailPage");
    },
  },
};
</script>

<style scoped>
.listPageContent-module {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1000px;
  background-color: #fff;
  margin: 0 auto;
}

.listPageContent-module > h1,
.listPageContent-module > p,
.listPageContent-module-content {
  margin-top: 30px;
}

.listPageContent-module-content {
  display: flex;
  flex-wrap: wrap;
  width: 999px;
  align-content: space-between;
  height: 750px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.content-imgBox {
  width: 200px;
  height: 350px;
}

.content-imgBox:hover {
  background-color: #5cadff;
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

.content-imgBox-textBox {
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 13px;
}

.content-imgBox-textBox > p:first-child {
  color: #1c2438;
  font-weight: 700;
}

.content-imgBox-textBox > span {
  color: #d4282d;
}

.content-imgBox-textBox > p:last-child {
  color: #999999;
}
</style>
