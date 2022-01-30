<template>
  <div class="detailPageHeaderMoudle">
    <div class="header-left">
      <img class="i-bigImg" :src="bigImg" />
      <div class="header-left-smallImg-box">
        <img
          :src="item.img"
          v-for="(item, index) of smallImg_list"
          @mouseenter="change(index)"
          :key="index"
          class="i-small"
        />
      </div>
      <div class="header-left-bottomBox">批量采购更优惠 ></div>
    </div>
    <div class="header-right">
      <div class="header-right-top">
        <div class="header-right-top-left">
          <h1>坐躺两用可拆洗，现代简约布艺转角沙发</h1>
          <p>意式极简设计，百搭不失调性</p>
        </div>
        <div class="header-right-top-right">
          <p>99.8%</p>
          <span class="header-right-top-right-span">好评率 ></span>
        </div>
      </div>
      <div class="header-right-center">
        <div class="header-right-center-price"><span>价格</span>￥3636</div>
        <div class="header-right-center-promotion">
          <span>促销</span>
          满1件享9折（不可与优惠券叠加使用）<br />
          超值换购
        </div>
        <div class="header-right-center-postage">
          <span>邮费</span>满99元免邮，邮费8元
        </div>
        <div class="header-right-center-delivery">
          <span>配送</span>至
          <Cascader :data="data" v-model="value2"></Cascader>
        </div>
        <div class="header-right-center-serve">
          <span>服务</span>
          ·鲸蓝自营 ·30天无忧退换 ·不可用券
        </div>
      </div>
      <div class="header-right-number">
        <span>数量</span>
        <Input-number :max="99" :min="1" v-model="value1"></Input-number>
      </div>
      <div class="header-right-buttom">
        <button class="header-right-buttom-buy">立即购买</button>
        <button class="header-right-buttom-join">加入购物车</button>
        <div class="header-right-buttom-collect">
          <img src="../assets/shoucang.png" alt="" />
          收藏
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailPageHeaderMoudle",
  data: function () {
    return {
      bigImg: require("@/assets/sofa.jpeg"),
      smallImg_list: [
        {
          img: require("@/assets/sofa1.jpeg"),
        },
        {
          img: require("@/assets/sofa2.jpeg"),
        },
        {
          img: require("@/assets/sofa3.jpeg"),
        },
        {
          img: require("@/assets/sofa4.jpeg"),
        },
        {
          img: require("@/assets/sofa5.jpeg"),
        },
      ],
      value1: 1,
      model1: "",
      model2: "",
      model3: "",
      model4: "",
      value2: ["jiangsu", "suzhou", "zhuozhengyuan"],
      data: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫",
            },
            {
              value: "tiantan",
              label: "天坛",
            },
            {
              value: "wangfujing",
              label: "王府井",
            },
          ],
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙",
                },
              ],
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园",
                },
                {
                  value: "shizilin",
                  label: "狮子林",
                },
              ],
            },
          ],
        }
      ],
    };
  },
  methods: {
    change(index) {
      this.bigImg = this.smallImg_list[index].img;
    },
  },
};
</script>

<style scoped>
.detailPageHeaderMoudle {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.header-left,
.header-right {
  width: 400px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.header-right {
  width: 550px;
}

.header-left-smallImg-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.i-small {
  width: 75px;
  height: 75px;
}

.i-small:hover {
  border: 1px solid #3399ff;
  cursor: pointer;
}

.header-left-bottomBox {
  align-self: flex-start;
  background-color: #5caeff3c;
  color: #3399ff;
  border: 1px solid #3399ff;
}

.header-left-bottomBox:hover {
  cursor: pointer;
  background-color: #5caeff10;
}

.header-right-top {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.header-right-top-left > h1 {
  font-size: 20px;
  color: #000;
}

.header-right-top-left > p {
  color: #9ea7b4;
  font-size: 14px;
}

.header-right-top-right > p {
  color: #e36844;
  font-size: 20px;
}

.header-right-top-right > span {
  color: #9ea7b4;
  font-size: 13px;
}

.header-right-top-right:hover {
  cursor: pointer;
}

.header-right-top-right:hover .header-right-top-right-span {
  color: #3399ff;
}

.header-right-center {
  width: 100%;
  height: 300px;
  background-color: #5caeff3c;
}

.header-right-center {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.header-right-center > div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #333333;
  font-size: 13px;
}

.header-right-center-promotion > span {
  align-self: flex-start;
}

.header-right-center > div:first-child {
  color: #d7282d;
  font-size: 28px;
}

.header-right-center-price {
  font-weight: 600;
}

.header-right-center-price > span {
  font-weight: normal;
}

.header-right-center > div > span {
  width: 40px;
  margin-left: 10px;
  font-size: 13px;
  color: #666666;
}

.header-right-number {
  align-self: flex-start;
}

.header-right-number > span {
  display: inline-block;
  width: 40px;
  font-size: 13px;
  color: #666666;
}

.header-right-buttom {
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 100%;
}

.header-right-buttom > button {
  width: 160px;
  height: 50px;
  border: 1px solid #3399ff;
  border-radius: 0px;
  margin-right: 10px;
  font-size: 18px;
}

.header-right-buttom-buy {
  color: #3399ff;
  background-color: #3399ff2e;
}

.header-right-buttom-join {
  background-color: #3399ff;
  color: #fff;
}

.header-right-buttom-collect {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #d7dde4;
}

.header-right-buttom-collect > img {
  width: 20px;
  height: 20px;
}

.header-right-buttom-buy:hover {
  background-color: #3399ff07;
}

.header-right-buttom-join:hover {
  background-color: #3399ffa8;
}

.header-right-buttom-buy:hover,
.header-right-buttom-join:hover,
.header-right-buttom-collect {
  cursor: pointer;
}
</style>