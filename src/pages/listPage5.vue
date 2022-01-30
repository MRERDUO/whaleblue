<template>
    <div class="indentPage">
        
        <list-header-module :top_list="top_list5"></list-header-module>
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
            top_list5:[{
					name: "全部"
				}, {
					name: "母婴热销"
				}, {
					name: "婴儿奶粉"
				}, {
					name: "辅食营养品"
				}, {
					name: "尿裤纸品"
				}, {
					name: "洗护"
				}, {
					name: "喂养"
				}, {
					name: "家具收纳"
				}, {
					name: "床品套件"
				}, {
					name: "被枕芯类"
				}, {
					name: "抱被睡袋"
				}, {
					name: "玩具"
				}, {
					name: "文具"
				}, {
					name: "图书"
				}, {
					name: "推车/安全座椅"
				}, {
					name: "童包/雨具/泳具"
				}, {
					name: "儿童鞋"
				}, {
					name: "学步鞋"
				}, {
					name: "裤子/裙装"
				}, {
					name: "T恤/polo/衬衫"
				}, {
					name: "外套/套装"
				}, {
					name: "连体衣/礼盒"
				}, {
					name: "内衣/配搭"
				}, {
					name: "卫衣/毛衫"
				}, {
					name: "孕妈服饰"
				}, {
					name: "妈咪用品"
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