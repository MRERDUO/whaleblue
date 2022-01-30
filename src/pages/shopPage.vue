<template>
  <div class="shopPage">
    <!-- 头部领券模块 -->
    <shop-page-header-module></shop-page-header-module>
    
    <!-- 内容商品模块 -->
    <shop-content-module></shop-content-module>

    <!-- 猜你喜欢模块 -->
    <related-module class="related-module"></related-module>
  </div>
</template>

<script>
import RelatedModule from '../components/related-module.vue';
import shopPageHeaderModule from '../components/shopPageHeaderModule.vue';
import shopContentModule from '../components/shopContentModule.vue';

export default {
  components: { shopPageHeaderModule, RelatedModule ,shopContentModule},
  name: "shopPage",
  data() {
    return {
        
    };
  },
  
};
</script>

<style scoped>
.shopPage {
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
}

.related-module{
    margin-top: 30px;
    margin-bottom: 50px;
}
</style>