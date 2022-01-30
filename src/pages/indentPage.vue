<template>
  <div class="indentPage">
      <indent-content-module></indent-content-module>

      <!-- 猜你喜欢模块 -->
    <related-module></related-module>
  </div>
</template>

<script>
import IndentContentModule from '../components/indentContentModule.vue';
import RelatedModule from "../components/related-module.vue";
export default {
  name: "indexPage",
  components: { RelatedModule,IndentContentModule },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
    .indentPage{
        width: 1000px;
        margin: 0 auto ;
        background-color: #fff;
        margin-top: 30px;
    }
</style>