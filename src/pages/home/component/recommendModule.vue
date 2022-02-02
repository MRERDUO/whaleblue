<template>
  <div class="recommendModule">
    <div class="content">
      <a @click="goListPage" class="content-recommend">更多推荐 ></a>
      <Tabs value="name1">
        <Tab-pane label="人气推荐" name="name1">
          <div class="tabs-left-bigBox" @click="goDetailPage">
            <img
              class="i-bigBox"
              src="@/assets/shangpin.jpg"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              :class="{ overAnimation: isActive, leaveAnimation: hasError }"
            />
            <span class="commodityName1">“猫屎咖啡”</span><br />
            <span class="priceText1">￥39</span>
          </div>
          <div class="tabs-right-box">
            <div class="tabs-right-smallBox" @click="goDetailPage">
              <img
                class="i-small"
                src="@/assets/shangpin2.jpg"
                @mouseover="mouseOver2"
                @mouseleave="mouseLeave2"
                :class="{ overAnimation: isActive2, leaveAnimation: hasError2 }"
                alt=""
              />
              <span class="commodityName">潮流攻势 手机无线充电器</span><br />
              <span class="priceText">￥36</span>
            </div>
            <div class="tabs-right-smallBox" @click="goDetailPage">
              <img
                class="i-small"
                src="@/assets/shangpin3.jpg"
                @mouseover="mouseOver3"
                @mouseleave="mouseLeave3"
                :class="{ overAnimation: isActive3, leaveAnimation: hasError3 }"
                alt=""
              />
              <span class="commodityName">优迭尔 打坐猫咪佛猫摆件</span><br />
              <span class="priceText">￥29</span>
            </div>
            <div class="tabs-right-smallBox" @click="goDetailPage">
              <img
                class="i-small"
                src="@/assets/shangpin4.jpg"
                @mouseover="mouseOver4"
                @mouseleave="mouseLeave4"
                :class="{ overAnimation: isActive4, leaveAnimation: hasError4 }"
                alt=""
              />
              <span class="commodityName"
                >蜜桃派内衣，仙女氛围感一次性拉满！</span
              ><br />
              <span class="priceText">￥109</span>
            </div>
            <div class="tabs-rightBottom-box">
              <div class="tabs-right-smallBox" @click="goDetailPage">
                <img
                  class="i-small"
                  src="@/assets/shangpin5.jpg"
                  @mouseover="mouseOver5"
                  @mouseleave="mouseLeave5"
                  :class="{
                    overAnimation: isActive5,
                    leaveAnimation: hasError5,
                  }"
                  alt=""
                />
                <span class="commodityName"
                  >长安 奔奔 E-Star 2021款 国民版 心悦版 磷酸铁锂</span
                ><br />
                <span class="priceText">￥39800</span>
              </div>
              <div class="tabs-right-smallBox" @click="goDetailPage">
                <img
                  class="i-small"
                  src="@/assets/shangpin6.jpg"
                  @mouseover="mouseOver6"
                  @mouseleave="mouseLeave6"
                  :class="{
                    overAnimation: isActive6,
                    leaveAnimation: hasError6,
                  }"
                  alt=""
                />
                <span class="commodityName"
                  >四季果蜜 凤凰单丛茶从枞鸭屎香 250g</span
                ><br />
                <span class="priceText">￥19.8</span>
              </div>
              <div class="tabs-right-smallBox" @click="goDetailPage">
                <img
                  class="i-small"
                  src="@/assets/shangpin7.jpg"
                  @mouseover="mouseOver7"
                  @mouseleave="mouseLeave7"
                  :class="{
                    overAnimation: isActive7,
                    leaveAnimation: hasError7,
                  }"
                  alt=""
                />
                <span class="commodityName"
                  >男士鹅绒夹克 MAMMUT 猛犸象 1013-01870 Meron</span
                ><br />
                <span class="priceText">￥1285</span>
              </div>
            </div>
          </div>
        </Tab-pane>
        <Tab-pane label="总榜推荐" name="name2">
          <div class="tabs-left-bigBox" @click="goDetailPage">
            <img
              class="i-bigBox"
              src="@/assets/shangpin14.jpg"
              @mouseover="mouseOver8"
              @mouseleave="mouseLeave8"
              :class="{ overAnimation: isActive8, leaveAnimation: hasError8 }"
              alt=""
            />
            <span class="commodityName1">草莓蛋糕</span><br />
            <span class="priceText1">￥39</span>
          </div>
          <div class="tabs-right-box">
            <div class="tabs-right-smallBox" @click="goDetailPage">
              <img
                class="i-small"
                src="@/assets/shangpin8.jpg"
                @mouseover="mouseOver9"
                @mouseleave="mouseLeave9"
                :class="{ overAnimation: isActive9, leaveAnimation: hasError9 }"
                alt=""
              />
              <span class="commodityName">原味即食速食纯燕麦片 1000g*1罐</span
              ><br />
              <span class="priceText">￥36</span>
            </div>
            <div class="tabs-right-smallBox" @click="goDetailPage">
              <img
                class="i-small"
                src="@/assets/shangpin9.jpg"
                @mouseover="mouseOver10"
                @mouseleave="mouseLeave10"
                :class="{
                  overAnimation: isActive10,
                  leaveAnimation: hasError10,
                }"
                alt=""
              />
              <span class="commodityName"
                >VANS 范斯 蓝芝士水兵月 VN0A3MV8Q69 中性高街帆布鞋</span
              ><br />
              <span class="priceText">￥294</span>
            </div>
            <div class="tabs-right-smallBox" @click="goDetailPage">
              <img
                class="i-small"
                src="@/assets/shangpin10.jpg"
                @mouseover="mouseOver11"
                @mouseleave="mouseLeave11"
                :class="{
                  overAnimation: isActive11,
                  leaveAnimation: hasError11,
                }"
                alt=""
              />
              <span class="commodityName"
                >TOREAD 探路者 TAWH91901 男子冲锋衣</span
              ><br />
              <span class="priceText">￥389</span>
            </div>
            <div class="tabs-rightBottom-box">
              <div class="tabs-right-smallBox" @click="goDetailPage">
                <img
                  class="i-small"
                  src="@/assets/shangpin11.jpg"
                  @mouseover="mouseOver12"
                  @mouseleave="mouseLeave12"
                  :class="{
                    overAnimation: isActive12,
                    leaveAnimation: hasError12,
                  }"
                  alt=""
                />
                <span class="commodityName"
                  >Apple 苹果 iPhone 13 5G智能手机 256GB</span
                ><br />
                <span class="priceText">￥6200</span>
              </div>
              <div class="tabs-right-smallBox" @click="goDetailPage">
                <img
                  class="i-small"
                  src="@/assets/shangpin12.jpg"
                  @mouseover="mouseOver13"
                  @mouseleave="mouseLeave13"
                  :class="{
                    overAnimation: isActive13,
                    leaveAnimation: hasError13,
                  }"
                  alt=""
                />
                <span class="commodityName"
                  >JACK DANIEL‘S 杰克丹尼 威士忌 洋酒 700ml</span
                ><br />
                <span class="priceText">￥93.34</span>
              </div>
              <div class="tabs-right-smallBox" @click="goDetailPage">
                <img
                  class="i-small"
                  src="@/assets/shangpin13.jpg"
                  @mouseover="mouseOver14"
                  @mouseleave="mouseLeave14"
                  :class="{
                    overAnimation: isActive14,
                    leaveAnimation: hasError14,
                  }"
                  alt=""
                />
                <span class="commodityName"
                  >RAZER 雷蛇 风行 RGB 空气净化面罩</span
                ><br />
                <span class="priceText">￥979</span>
              </div>
            </div>
          </div>
        </Tab-pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendModule",
  data() {
    return {
      isActive: false,
      hasError: false,
      isActive2: false,
      hasError2: false,
      isActive3: false,
      hasError3: false,
      isActive4: false,
      hasError4: false,
      isActive5: false,
      hasError5: false,
      isActive6: false,
      hasError6: false,
      isActive7: false,
      hasError7: false,
      isActive8: false,
      hasError8: false,
      isActive9: false,
      hasError9: false,
      isActive10: false,
      hasError10: false,
      isActive11: false,
      hasError11: false,
      isActive12: false,
      hasError12: false,
      isActive13: false,
      hasError13: false,
      isActive14: false,
      hasError14: false,
    };
  },
  methods: {
    mouseOver() {
      this.isActive = true;
      this.hasError = false;
    },
    mouseLeave() {
      this.isActive = false;
      this.hasError = true;
    },
    mouseOver2() {
      this.isActive2 = true;
      this.hasError2 = false;
    },
    mouseLeave2() {
      this.isActive2 = false;
      this.hasError2 = true;
    },
    mouseOver3() {
      this.isActive3 = true;
      this.hasError3 = false;
    },
    mouseLeave3() {
      this.isActive3 = false;
      this.hasError3 = true;
    },
    mouseOver4() {
      this.isActive4 = true;
      this.hasError4 = false;
    },
    mouseLeave4() {
      this.isActive4 = false;
      this.hasError4 = true;
    },
    mouseOver5() {
      this.isActive5 = true;
      this.hasError5 = false;
    },
    mouseLeave5() {
      this.isActive5 = false;
      this.hasError5 = true;
    },
    mouseOver6() {
      this.isActive6 = true;
      this.hasError6 = false;
    },
    mouseLeave6() {
      this.isActive6 = false;
      this.hasError6 = true;
    },
    mouseOver7() {
      this.isActive7 = true;
      this.hasError7 = false;
    },
    mouseLeave7() {
      this.isActive7 = false;
      this.hasError7 = true;
    },
    mouseOver8() {
      this.isActive8 = true;
      this.hasError8 = false;
    },
    mouseLeave8() {
      this.isActive8 = false;
      this.hasError8 = true;
    },
    mouseOver9() {
      this.isActive9 = true;
      this.hasError9 = false;
    },
    mouseLeave9() {
      this.isActive9 = false;
      this.hasError9 = true;
    },
    mouseOver10() {
      this.isActive10 = true;
      this.hasError10 = false;
    },
    mouseLeave10() {
      this.isActive10 = false;
      this.hasError10 = true;
    },
    mouseOver11() {
      this.isActive11 = true;
      this.hasError11 = false;
    },
    mouseLeave11() {
      this.isActive11 = false;
      this.hasError11 = true;
    },
    mouseOver12() {
      this.isActive12 = true;
      this.hasError12 = false;
    },
    mouseLeave12() {
      this.isActive12 = false;
      this.hasError12 = true;
    },
    mouseOver13() {
      this.isActive13 = true;
      this.hasError13 = false;
    },
    mouseLeave13() {
      this.isActive13 = false;
      this.hasError13 = true;
    },
    mouseOver14() {
      this.isActive14 = true;
      this.hasError14 = false;
    },
    mouseLeave14() {
      this.isActive14 = false;
      this.hasError14 = true;
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
.content {
  background-color: #f5f7f9;
  width: 1000px;
  margin: 0 auto;
  position: relative;
  text-align: center;
}

.content-recommend {
  position: absolute;
  right: 5px;
  top: 10px;
  color: #657180;
  z-index: 5;
}

.content-recommend:hover {
  color: #3399ff;
}

.tabs-left-bigBox {
  margin: 0px;
  width: 370px;
  height: 570px;
  display: inline-block;
  background-color: #fff;
  vertical-align: top;
}

.tabs-right-box {
  display: inline-block;
  margin: 0px;
  padding: 0px;
  width: 620px;
}

.tabs-right-smallBox {
  width: 200px;
  height: 280px;
  display: inline-block;
  margin-left: 3px;
  background-color: #fff;
}

.tabs-rightBottom-box {
  display: inline-block;
  margin-top: 10px;
}

.i-bigBox {
  width: 370px;
}

.overAnimation {
  animation: mouseOver 1s;
  -webkit-animation: mouseOver 1s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

.leaveAnimation {
  animation: mouseLeave 1s;
  -webkit-animation: mouseLeave 1s;
}

@keyframes mouseOver {
  from {
    transform: scale(100%);
  }
  to {
    transform: scale(105%);
  }
}

@-webkit-keyframes mouseOver /* Safari and Chrome */ {
  from {
    transform: scale(100%);
  }
  to {
    transform: scale(105%);
  }
}

@keyframes mouseLeave {
  from {
    transform: scale(105%);
  }
  to {
    transform: scale(100%);
  }
}

@-webkit-keyframes mouseLeave /* Safari and Chrome */ {
  from {
    transform: scale(105%);
  }
  to {
    transform: scale(100%);
  }
}

.i-small {
  width: 200px;
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

.priceText {
  color: red;
  font-size: 13px;
}

.commodityName1 {
  display: inline-block;
  margin-top: 5px;
  width: 150px;
  font-size: 18px;
  color: #333;
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.priceText1 {
  color: red;
  font-size: 18px;
}

.tabs-left-bigBox:hover,
.tabs-right-smallBox:hover {
  cursor: pointer;
}
</style>