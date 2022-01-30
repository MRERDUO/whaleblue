<template>
  <div class="shopContentModule">
    <div class="shopContentModule-contentBox">
      <img class="shop" src="@/assets/gouwuche.png" alt="" />
      <p>购物车还是空滴</p>
      <button @click="goHomePage">继续逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopContentModule",
  data() {
    return {};
  },
  methods:{
      goHomePage(){
          this.$router.push("/homePage")
      }
  }
};
</script>

<style scoped>
.shopContentModule {
  margin-top: 20px;
  margin-bottom: 50px;
  width: 1000px;
  height: 700px;
  border: 1px solid #d7dde4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shopContentModule-contentBox{
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.shopContentModule-contentBox>p{
    color: #999999;
    font-size: 16px;
}

.shopContentModule-contentBox>button{
    width: 100px;
    height: 40px;
    border: 1px solid #3399ff;
    color: #3399ff;
    background-color: #3399ff19;
}

.shopContentModule-contentBox>button:hover{
    cursor: pointer;
    background-color:#3399ff04 ;
}
</style>