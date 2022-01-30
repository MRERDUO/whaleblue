<template>
  <div class="carousel" :style="sizeStyle">
    <div :style="scrollStyle" v-for="(item,index) in list" :key="item.title">
      <a :href="item.url">
        <img
          :src="item.path"
          :alt="item.title"
          :style="sizeStyle"
          :class="(currentIndex==index+1)?'selected':'unSelect'"
        />
      </a>
     <!-- <span v-if="showTitle" class="title">{{item.title}}</span> -->
    </div>
    <!-- 过渡图片 -->
    <div :style="scrollStyle">

      <a :href="firstItem.url">
        <img
          :src="firstItem.path"
          :alt="firstItem.title"
          :style="sizeStyle"
          :class="(currentIndex==1)?'selected':'unSelect'"
        />
      </a>
     <!-- <span v-if="showTitle" class="title">{{firstItem.title}}</span> -->
    </div>
    <!-- 指示控件 -->
    <div class="dotList">
      <span @click="handleSwitch(index)" class="dot" v-for="(item,index) in list" :key="item.title">
        <div v-show="currentIndex==index+1" class="dot-actived"></div>
      </span>
    </div>
    <!--悬浮箭头-->
    <div class="arrows">
      <div class="arrows-left" @click="handleSwitchLeft">
        <img class="i-arrows" src="../assets/arrows_left.png" >
      </div>
      <div class="arrows-right" @click="handleSwitchRight">
        <img class="i-arrows" src="../assets/arrows_right.png" >
      </div>
    </div>
  </div>
</template>

<script>
let timer;
let transtionTimer;
export default {
  name: "Carousel",
  props: {
    list: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    showTitle: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      width: 1920,
      height: 420,
      currentIndex: 1,
      scrollStyle: { transform: "translateX(0px)" }
    };
  },
  mounted() {
    this.begin();
  },
  computed: {
    firstItem() {
      return this.list[0];
    },
    number() {
      return this.list.length + 1;
    },
    sizeStyle() {
      return { width: this.width + "px", height: this.height + "px" };
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
    handleSwitchLeft(){
      clearInterval(transtionTimer);
      transtionTimer = null;
      clearInterval(timer);
      timer = null;
      this.currentIndex = this.currentIndex - 1;
      if(this.currentIndex === 0){
        this.currentIndex = this.list.length;
      }

      console.log(-((this.currentIndex-1)%this.number))

      this.scrollStyle = {
        transform:"translateX("+  -((this.currentIndex-1)%this.number) * this.width +"px)",
        transition:"opacity 0.6s linear"
      };
      this.begin();
    },
    handleSwitchRight(){
      clearInterval(transtionTimer);
      transtionTimer = null;
      clearInterval(timer);
      timer = null;
      this.currentIndex = this.currentIndex + 1;
      if(this.currentIndex === (this.list.length+1)){
        this.currentIndex = this.list.length-3;
      }

      this.scrollStyle = {
        transform:"translateX("+  -((this.currentIndex-1)%this.number) * this.width +"px)",
        transition:"opacity 0.6s linear"
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
.arrows{
  position: absolute;
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
}

.arrows-left,.arrows-right{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3399FF;
  opacity: 0.3;
}

.arrows-left:hover,.arrows-right:hover{
  opacity: 0.8;
}

.i-arrows{
  width: 30px;
  height: 30px;
}

.carousel {
  display: flex;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

/* 动画效果 */
.selected {
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
}

.dotList {
  display: flex;
  position: absolute;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
}
.dot {
  width: 10px;
  height: 10px;
  margin: 0 2px;
  margin: 10px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
}

.dot-actived {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3399FF;
  box-shadow: 0 0 0 4px rgba(51,153,255,0.4);
}

.dot:hover{
  box-shadow: 0 0 0 4px rgba(51,153,255,0.4);
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
