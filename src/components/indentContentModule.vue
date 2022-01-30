<template>
  <div class="indentContentModule">
    <div class="indent-search">
      <Input
        style="width: 250px"
        search
        enter-button="搜索"
        placeholder="请输入商品名称或订单号搜索"
      />
    </div>
    <Tabs value="name1">
      <Tab-pane label="全部订单" name="name1">
        <div class="tabs-pane-box">
          <div class="tabs-pane-box-content">
            <img src="@/assets/dingdan.png" alt="" />
            <p>还没有任何订单呢</p>
            <a @click="goHomePage">去挑选好物 >></a>
          </div>
        </div>
      </Tab-pane>
      <Tab-pane label="待付款" name="name2">
        <div class="tabs-pane-box">
          <div class="tabs-pane-box-content">
            <img src="@/assets/dingdan.png" alt="" />
            <p>当前无待付款订单</p>
          </div>
        </div>
      </Tab-pane>
      <Tab-pane label="待发货" name="name3">
        <div class="tabs-pane-box">
          <div class="tabs-pane-box-content">
            <img src="@/assets/dingdan.png" alt="" />
            <p>当前无代发货订单</p>
          </div>
        </div>
      </Tab-pane>
      <Tab-pane label="已发货" name="name4">
        <div class="tabs-pane-box">
          <div class="tabs-pane-box-content">
            <img src="@/assets/dingdan.png" alt="" />
            <p>当前无已发货订单</p>
          </div>
        </div>
      </Tab-pane>
      <Tab-pane label="待评价" name="name5">
        <div class="tabs-pane-box">
          <div class="tabs-pane-box-content">
            <img src="@/assets/dingdan.png" alt="" />
            <p>当前无待评价订单</p>
          </div>
        </div>
      </Tab-pane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "indentContentModule",
  data() {
    return {
      value: "",
    };
  },
  methods:{
      goHomePage(){
          this.$router.push("/homePage")
      }
  }
};
</script>

<style scoped>
.indentContentModule {
  width: 100%;
  height: 700px;
  position: relative;
}

.indent-search {
  position: absolute;
  top: 0px;
  right: 0px;
}

.tabs-pane-box {
  width: 1000px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs-pane-box-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 35%;
}

.tabs-pane-box-content>p{
    font-size: 16px;
    color: #999999;
}

.tabs-pane-box-content>a{
    font-size: 14px;
}
</style>