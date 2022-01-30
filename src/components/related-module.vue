<template>
  <div class="related-module">
    <div class="related-module-title">
      猜你喜欢
    </div>
    <div class="related-module-content">
      <related-carousel></related-carousel>
    </div>
  </div>
</template>

<script>
  import relatedCarousel from './related-carousel.vue'

  export default({
    name:'related-module',
    data(){
      return{
        list:[]
      }
    },
    components:{
      relatedCarousel
    }
  })
</script>

<style scoped>
  .related-module{
    width: 1000px;
    height: 400px;
    display: flex;
    background-color: #FFFFFF;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #d7dde4;
  }

  .related-module-title{
    width: 100%;
    height: 40px;
    background-color:#f5f7f9 ;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .related-module-content{
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
