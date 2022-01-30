<template>
    <div class="indentPage">
        <list-header-module :top_list="top_list2"></list-header-module>
        
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
            top_list2: [{
					name: "全部"
				}, {
					name: "轻羽系列"
				}, {
					name: "保暖系列"
				}, {
					name: "羊毛羊绒系列"
				}, {
					name: "职场系列"
				}, {
					name: "男式衬衫"
				}, {
					name: "运动潮服系列"
				}, {
					name: "男式针织衫/卫衣"
				}, {
					name: "男式外套"
				}, {
					name: "潮靴系列"
				}, {
					name: "男式牛仔裤"
				}, {
					name: "女式内衣"
				}, {
					name: "男式裤装"
				}, {
					name: "男式T恤/POLO"
				}, {
					name: "女式衬衫"
				}, {
					name: "女式西装"
				}, {
					name: "珠宝首饰"
				}, {
					name: "男式西服"
				}, {
					name: "女式裤装"
				}, {
					name: "女式毛衫"
				}, {
					name: "女式T恤/POLO"
				}, {
					name: "女式外套"
				}, {
					name: "男式家居服"
				}, {
					name: "女式家居服"
				}, {
					name: "男式毛衫"
				}, {
					name: "女式内裤"
				}, {
					name: "女式保暖套装"
				}, {
					name: "男式内衣"
				}, {
					name: "男式风衣"
				}, {
					name: "女式裙装"
				}, {
					name: "男式内裤"
				}, {
					name: "女袜"
				}, {
					name: "男式羽绒服"
				}, {
					name: "男式运动鞋"
				}, {
					name: "男式运动外套"
				}, {
					name: "女式运动紧身裤"
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