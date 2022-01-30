<template>
    <div class="indentPage">
        <list-header-module :top_list="top_list3"></list-header-module>
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
            top_list3: [{
					name: "全部"
				}, {
					name: "肉类零食"
				}, {
					name: "美味上新"
				}, {
					name: "中秋礼遇"
				}, {
					name: "饼干糕点"
				}, {
					name: "小食糖巧"
				}, {
					name: "爆款美食"
				}, {
					name: "坚果炒货"
				}, {
					name: "蜜饯果干"
				}, {
					name: "冲调饮品"
				}, {
					name: "传统茗茶"
				}, {
					name: "茗茶礼盒"
				}, {
					name: "茶包花茶"
				}, {
					name: "滋补食材"
				}, {
					name: "保健品"
				}, {
					name: "乳品饮料"
				}, {
					name: "国产酒"
				}, {
					name: "进口酒"
				}, {
					name: "名酒馆"
				}, {
					name: "米面粮油"
				}, {
					name: "方便食品"
				}, {
					name: "南北干货"
				}, {
					name: "调味酱菜"
				}, {
					name: "水果蔬菜"
				}, {
					name: "园艺绿植"
				}, {
					name: "精选肉类"
				}, {
					name: "水产海鲜"
				}, {
					name: "冷冻冷藏"
				}, {
					name: "全球美食"
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