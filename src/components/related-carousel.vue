<template>
  <div class="relatedCarouselModule">
  <div class="related-carousel" :style="sizeStyle">
    <div :style="scrollStyle">
      <div :style="sizeStyle" class="related-carousel-box">
        <div class="related-carousel-box-img" v-for="(item,index) of goods_list" :key="index">
          <img :src="item.img">
          <p>{{item.title}}</p>
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>
    <div :style="scrollStyle">
      <div :style="sizeStyle" class="related-carousel-box2">
        <div class="related-carousel-box-img" v-for="(item,index) of goods_list" :key="index">
          <img :src="item.img">
          <p>{{item.title}}</p>
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>
    <div :style="scrollStyle">
      <div :style="sizeStyle" class="related-carousel-box3">
        <div class="related-carousel-box-img" v-for="(item,index) of goods_list" :key="index">
          <img :src="item.img">
          <p>{{item.title}}</p>
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>
    <div :style="scrollStyle">
      <div :style="sizeStyle" class="related-carousel-box">
        <div class="related-carousel-box-img" v-for="(item,index) of goods_list" :key="index">
          <img :src="item.img">
          <p>{{item.title}}</p>
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>
    <!-- 指示控件 -->
    <div class="dotList">
      <span @click="handleSwitch(0)" class="dot">
        <div v-show="currentIndex==1" class="dot-actived"></div>
      </span>
      <span @click="handleSwitch(1)" class="dot">
        <div v-show="currentIndex==2" class="dot-actived"></div>
      </span>
      <span @click="handleSwitch(2)" class="dot">
        <div v-show="currentIndex==3" class="dot-actived"></div>
      </span>
    </div>

  </div>
  <!--悬浮箭头-->
  <div class="arrows">
    <div class="arrows-left" @click="handleSwitchLeft">
      <img class="i-arrows" src="../assets/arrows_left.png">
    </div>
    <div class="arrows-right" @click="handleSwitchRight">
      <img class="i-arrows" src="../assets/arrows_right.png">
    </div>
  </div>
  </div>
</template>

<script>
  let timer;
  let transtionTimer;
  export default {
    name: "related-carousel",
    props: {
      // list: {
      //   type: Array,
      //   required: true,
      //   default () {
      //     return [];
      //   }
      // },
      showTitle: {
        type: Boolean,
        default () {
          return true;
        }
      }
    },
    data() {
      return {
        width: 830,
        height: 330,
        currentIndex: 1,
        scrollStyle: {
          transform: "translateX(0px)"
        },
        goods_list:[{
          img:require("../assets/goods1.jpeg"),
          title:"饼干",
          price:36
        },{img:require("../assets/goods2.jpeg"),
          title:"饼干",
          price:36
        },{img:require("../assets/goods3.jpeg"),
          title:"饼干",
          price:36
        },{img:require("../assets/goods4.jpeg"),
          title:"饼干",
          price:36
        }]
      };
    },
    mounted() {
      this.begin();
    },
    computed: {
      // firstItem() {
      //   return this.list[0];
      // },
      number() {
        // return this.list.length + 1;
        return 4;
      },
      sizeStyle() {
        return {
          width: this.width + "px",
          height: this.height + "px"
        };
      }
    },
    methods: {
      begin() {
        timer = setInterval(() => {
          if (transtionTimer) {
            return;
          }
          this.scroll();
        }, 4000);
      },
      scroll() {
        let start = -(((this.currentIndex - 1) % this.number) * this.width);
        let end = -(this.currentIndex % this.number) * this.width;
        if (end == 0) {
          start = 0;
          end = -this.width;
        }
        this.move(start, end);
      },
      move(start, end) {
        let offset = this.width / 40;
        //定时器，实现平移效果
        transtionTimer = setInterval(() => {
          start = start - offset;
          if (start <= end) {
            clearInterval(transtionTimer);
            transtionTimer = null;
            start = end;
            if (this.currentIndex % this.number == 0) {
              this.currentIndex = 1;
            } else {
              this.currentIndex++;
              // 过渡效果：移动到最后一张图后（我们在最后加的第一张图片），把偏移量设置为0，自动切换成第一图
              if (this.currentIndex == this.number) {
                this.currentIndex = 1;
                start = 0;
              }
            }
          }
          this.scrollStyle = {
            transform: "translateX(" + start + "px)"
          };
        }, 20);
      },
      handleSwitch(index) {
        clearInterval(transtionTimer);
        transtionTimer = null;
        clearInterval(timer);
        timer = null;
        this.currentIndex = index + 1;

        this.scrollStyle = {
          transform: "translateX(" + -(index % this.number) * this.width + "px)",
          transition: "opacity 0.6s linear"
        };
        this.begin();
      },
      handleSwitchLeft() {
        clearInterval(transtionTimer);
        transtionTimer = null;
        clearInterval(timer);
        timer = null;
        this.currentIndex = this.currentIndex - 1;
        if (this.currentIndex === 0) {
          this.currentIndex = 3;
        }

        console.log(-((this.currentIndex - 1) % this.number))

        this.scrollStyle = {
          transform: "translateX(" + -((this.currentIndex - 1) % this.number) * this.width + "px)",
          transition: "opacity 0.6s linear"
        };
        this.begin();
      },
      handleSwitchRight() {
        clearInterval(transtionTimer);
        transtionTimer = null;
        clearInterval(timer);
        timer = null;
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex === 4) {
          this.currentIndex = 1;
        }

        this.scrollStyle = {
          transform: "translateX(" + -((this.currentIndex - 1) % this.number) * this.width + "px)",
          transition: "opacity 0.6s linear"
        };
        this.begin();
      },
    },

    destroyed() {
      clearInterval(timer);
      timer = null;
      clearInterval(transtionTimer);
      transtionTimer = null;
    }
  };
</script>

<style scoped>
  .relatedCarouselModule{
    position: relative;
  }

  .related-carousel-box,.related-carousel-box2,.related-carousel-box3{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .related-carousel-box-img{
    display: flex;
    width: 200px;
    height: 300px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .related-carousel-box-img:hover{
    cursor: pointer;
    transform: scale(110%);
  }

  .related-carousel-box-img>img{
    width: 200px;
    height: 200px;
  }

  .related-carousel-box-img>p{
    color: #333333;
    font-size: 13px;
  }

  .related-carousel-box-img>span{
    color: #D4282D;
  }

  .arrows {
    position: absolute;
    width: 950px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .arrows-left,
  .arrows-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #3399FF;
    opacity: 0.3;
  }

  .arrows-left:hover,
  .arrows-right:hover {
    opacity: 0.8;
  }

  .i-arrows {
    width: 30px;
    height: 30px;
  }

  .related-carousel {
    display: flex;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }

  /* 动画效果 */
  /* .selected {
  opacity: 1;
  animation: myOpacity 0.6s;
}
.unSelect {
  opacity: 0.1;
}

@keyframes myOpacity {
  0% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
} */

  .dotList {
    display: flex;
    position: absolute;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    top:270px;
  }

  .dot {
    width: 10px;
    height: 10px;
    margin: 0 2px;
    margin: 10px;
    background: #fff;
    border: 1px solid #D7DDE4;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
  }

  .dot-actived {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3399FF;
    box-shadow: 0 0 0 4px rgba(51, 153, 255, 0.4);
  }

  .dot:hover {
    box-shadow: 0 0 0 4px rgba(51, 153, 255, 0.4);
  }

  .title {
    height: 30px;
    background: rgba(213, 213, 230, 0.4);
    text-align: center;
    position: absolute;
    transform: translateY(-100%);
    color: #fff;
    display: flex;
    width: 100%;
    justify-content: center;
  }
</style>
