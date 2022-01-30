<template>
  <div class="header-module">
    <div class="header-top">
      <div class="header-top-box">
        <div class="header-top-box-right">
          <a @click="goLogin">登录/注册</a>
          <div class="header-stand"></div>
          <a @click="goIndent">我的订单</a>
          <div class="header-stand"></div>
          <a href="###"><img class="i-phone" src="@/assets/phone.png" />APP</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-box">
        <img
          class="i-logo"
          @click="goHomePage"
          src="@/assets/logo.png"
          alt="logo"
        />
        <div>
          <Input
            style="width: 500px;margin-right: 49px;"
            search
            enter-button="搜索"
            placeholder="请输入商品名..."
          />
          <Badge :count="count">
            <Button
              @click="goShop"
              type="default"
              icon="ios-cart-outline"
              shape="circle"
            >
              购物车
            </Button>
          </Badge>
        </div>
      </div>
      <div class="header-bottomDown">
        <div><a @click="goHomePage" class="header-bottomDown-a">首页</a></div>
        <div>
          <Dropdown @click.native="goListPage">
            <a @click="goListPage" class="header-bottomDown-a">居家生活</a>
            <Dropdown-menu slot="list">
              <Dropdown-item>床品件套</Dropdown-item>
              <Dropdown-item>被枕褥毯</Dropdown-item>
              <Dropdown-item>办公家具</Dropdown-item>
              <Dropdown-item>卧室家具</Dropdown-item>
              <Dropdown-item>厨房电器</Dropdown-item>
              <Dropdown-item>锅具清洁</Dropdown-item>
              <Dropdown-item>客厅家具</Dropdown-item>
              <Dropdown-item>百货日用</Dropdown-item>
              <Dropdown-item>家庭健康</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown @click.native="goListPage2">
            <a @click="goListPage2" class="header-bottomDown-a">服饰鞋包</a>
            <Dropdown-menu slot="list">
              <Dropdown-item>居家内搭</Dropdown-item>
              <Dropdown-item>男装</Dropdown-item>
              <Dropdown-item>女装</Dropdown-item>
              <Dropdown-item>鞋靴</Dropdown-item>
              <Dropdown-item>运动户外</Dropdown-item>
              <Dropdown-item>箱包</Dropdown-item>
              <Dropdown-item>拖鞋</Dropdown-item>
              <Dropdown-item>珠宝配饰</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown @click.native="goListPage3">
            <a @click="goListPage3" class="header-bottomDown-a">美食酒水</a>
            <Dropdown-menu slot="list">
              <Dropdown-item>休闲零食</Dropdown-item>
              <Dropdown-item>坚果蜜饯</Dropdown-item>
              <Dropdown-item>冲饮茗茶</Dropdown-item>
              <Dropdown-item>滋补保健</Dropdown-item>
              <Dropdown-item>酒水乳饮</Dropdown-item>
              <Dropdown-item>粮油调味</Dropdown-item>
              <Dropdown-item>生鲜特色</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown @click.native="goListPage4">
            <a @click="goListPage4" class="header-bottomDown-a">个护清洁</a>
            <Dropdown-menu slot="list">
              <Dropdown-item>面部护理</Dropdown-item>
              <Dropdown-item>彩妆香水</Dropdown-item>
              <Dropdown-item>个人护理</Dropdown-item>
              <Dropdown-item>个护电器</Dropdown-item>
              <Dropdown-item>纸品清洁</Dropdown-item>
              <Dropdown-item>家清卫浴</Dropdown-item>
              <Dropdown-item>成人用品</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown @click.native="goListPage5">
            <a @click="goListPage5" class="header-bottomDown-a">母婴亲子</a>
            <Dropdown-menu slot="list">
              <Dropdown-item>婴童精选</Dropdown-item>
              <Dropdown-item>婴童精选</Dropdown-item>
              <Dropdown-item>洗护喂养</Dropdown-item>
              <Dropdown-item>婴童寝居</Dropdown-item>
              <Dropdown-item>玩具出行</Dropdown-item>
              <Dropdown-item>童鞋配搭</Dropdown-item>
              <Dropdown-item>童装</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown @click.native="goListPage6">
            <a @click="goListPage6" class="header-bottomDown-a">运动旅行</a>
            <Dropdown-menu slot="list">
              <Dropdown-item>人气好物</Dropdown-item>
              <Dropdown-item>行李箱</Dropdown-item>
              <Dropdown-item>运动服</Dropdown-item>
              <Dropdown-item>运动鞋</Dropdown-item>
              <Dropdown-item>健身塑形</Dropdown-item>
              <Dropdown-item>旅行用品</Dropdown-item>
              <Dropdown-item>户外出行</Dropdown-item>
              <Dropdown-item>按摩养生</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown @click.native="goListPage7">
            <a @click="goListPage7" class="header-bottomDown-a">数码家电</a>
            <Dropdown-menu slot="list">
              <Dropdown-item>品质尖货</Dropdown-item>
              <Dropdown-item>生活电器</Dropdown-item>
              <Dropdown-item>按摩电器</Dropdown-item>
              <Dropdown-item>个护电器</Dropdown-item>
              <Dropdown-item>厨房电器</Dropdown-item>
              <Dropdown-item>智能生活</Dropdown-item>
              <Dropdown-item>数码办公</Dropdown-item>
              <Dropdown-item>影音娱乐</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-module",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/loginPage");
    },
    goHomePage() {
      this.$router.push("/homePage");
    },
    goIndent() {
      this.$router.push("/indentPage");
    },
    goShop() {
      this.$router.push("/shopPage");
    },
    goListPage() {
      this.$router.push("/listPage");
    },
    goListPage2() {
      this.$router.push("/listPage2");
    },
    goListPage3() {
      this.$router.push("/listPage3");
    },
    goListPage4() {
      this.$router.push("/listPage4");
    },
    goListPage5() {
      this.$router.push("/listPage5");
    },
    goListPage6() {
      this.$router.push("/listPage6");
    },
    goListPage7() {
      this.$router.push("/listPage7");
    }
  },
};
</script>

<style scoped>
.header-module{
  background-color: #fff;
}

.header-top {
  height: 36px;
  width: 100%;
  background-color: #3399ff;
  box-shadow: 0px 2px 5px #d7dde4;
}

.header-top-box {
  height: 36px;
  position: relative;
  width: 1000px;
  margin: auto;
}

.header-top-box-right {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(0, -50%);
  height: 30px;
  line-height: 30px;
}

.header-top-box-right > a {
  color: #fff;
}

.i-phone {
  width: 15px;
  vertical-align: middle;
}

.header-stand {
  display: inline-block;
  margin: 10px;
  border-left: 1px solid #e3e8ee;
  height: 10px;
  vertical-align: top;
}

.header-bottom {
  width: 100%;
  box-shadow: 0px 2px 5px #d7dde4;
}

.header-bottom-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 140px;
  margin: 0 auto;
}

.header-bottom-box>div{
  display:flex;
}

.header-bottom-box-left {
  float: left;
}

.i-logo {
  margin-top: 20px;
  width: 150px;
}

.i-logo:hover{
  cursor: pointer;
}

.header-bottom-input {
  width: 500px;
  margin-left: 10%;
  margin-top: 40px;
  display: inline-block;
}

.header-bottom-outline {
  float: right;
  margin-top: 40px;
  display: inline-block;
}

.header-bottomDown {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.header-bottomDown > div {
  flex: 1;
  text-align: center;
}

.header-bottomDown-a {
  color: #464c5b;
  font-size: 16px;
  font-weight: 800;
}

.header-bottomDown-a:hover {
  color: #3399ff;
  border-bottom: 2px solid #3399ff;
}
</style>