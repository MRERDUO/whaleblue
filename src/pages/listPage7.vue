<template>
    <div class="indentPage">
      
        <list-header-module :top_list="top_list7"></list-header-module>
        <list-page-content-module></list-page-content-module>
		<list-page-content-module></list-page-content-module>
		<list-page-content-module></list-page-content-module>
		<list-page-content-module></list-page-content-module>
		<list-page-content-module></list-page-content-module>
		<list-page-content-module></list-page-content-module>
		<list-page-content-module></list-page-content-module>
      
    </div>
</template>

<script>
import ListHeaderModule from '../components/listHeader-module.vue'
import ListPageContentModule from '../components/listPageContent-module.vue'

export default {
    components: {ListHeaderModule,ListPageContentModule},
    name:'indexPage',
    data(){
        return{
            top_list7: [{
					name: "全部"
				}, {
					name: "热卖爆款"
				}, {
					name: "新品首发"
				}, {
					name: "清洁电器"
				}, {
					name: "两季电器"
				}, {
					name: "衣物护理"
				}, {
					name: "空气调节"
				}, {
					name: "身体护理"
				}, {
					name: "头发护理"
				}, {
					name: "口腔护理"
				}, {
					name: "面部护理"
				}, {
					name: "按摩器"
				}, {
					name: "按摩椅"
				}, {
					name: "厨房电器"
				}, {
					name: "智能家居"
				}, {
					name: "智能出行"
				}, {
					name: "手机配件"
				}, {
					name: "3C数码"
				}, {
					name: "车载用品"
				}, {
					name: "办公文具"
				}, {
					name: "影音娱乐"
				}, {
					name: "乐器"
				}]
        }
    }
}
</script>

<style scoped>
	.indentPage{
		margin-bottom: 50px;
	}

</style>