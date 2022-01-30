<template>
  <div class="detailPage">
    <detail-page-header-moudle></detail-page-header-moudle>

    <related-module class="related-module"></related-module>
  </div>
</template>

<script>
import detailPageHeaderMoudle from "../components/detailPageHeaderMoudle.vue";
import RelatedModule from "../components/related-module.vue";
export default {
  components: { detailPageHeaderMoudle, RelatedModule },
  name: "detailPage",
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.detailPage {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.related-module{
    margin-top: 50px;
}
</style>