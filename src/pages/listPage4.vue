<template>
    <div class="indentPage">
        <list-header-module :top_list="top_list4"></list-header-module>
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
    components: {ListHeaderModule,ListPageContentModule },
    name:'indexPage',
    data(){
        return{
            top_list4: [{
					name: "全部"
				}, {
					name: "爆款榜单"
				}, {
					name: "新品尝鲜"
				}, {
					name: "基础护肤"
				}, {
					name: "卸妆洁面"
				}, {
					name: "护肤工具"
				}, {
					name: "洗发护发"
				}, {
					name: "身体护理"
				}, {
					name: "口腔护理"
				}, {
					name: "女性护理"
				}, {
					name: "彩妆修容"
				}, {
					name: "美妆工具"
				}, {
					name: "香水香氛"
				}, {
					name: "口腔护理电器"
				}, {
					name: "面部护理电器"
				}, {
					name: "头发护理电器"
				}, {
					name: "身体护理电器"
				}, {
					name: "纸品"
				}, {
					name: "干湿巾"
				}, {
					name: "衣物护理"
				}, {
					name: "家庭清洁"
				}, {
					name: "餐厨清洁"
				}, {
					name: "毛巾浴巾"
				}, {
					name: "浴室用品"
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