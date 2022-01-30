<template>
    <div class="indentPage">
        <list-header-module :top_list="top_list6"></list-header-module>
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
            top_list6:[{
					name: "全部"
				}, {
					name: "雨具雨伞"
				}, {
					name: "重磅新品"
				}, {
					name: "旅行用品"
				}, {
					name: "乐享旅途"
				}, {
					name: "男式运动T恤"
				}, {
					name: "男式运动外套/卫衣"
				}, {
					name: "男式运动裤装"
				}, {
					name: "男式户外服装"
				}, {
					name: "女式运动T恤"
				}, {
					name: "女式运动外套/卫衣"
				}, {
					name: "女式运动裤装"
				}, {
					name: "女式户外服装"
				}, {
					name: "女式运动内衣/泳装"
				}, {
					name: "男式运动鞋"
				}, {
					name: "女式运动鞋"
				}, {
					name: "按摩器械"
				}, {
					name: "养生眼罩"
				}, {
					name: "水杯水具"
				}, {
					name: "旅行收纳"
				}, {
					name: "出行用品"
				}, {
					name: "露营/户外装备"
				}, {
					name: "登山/攀岩"
				}, {
					name: "颈枕/毯/垫"
				}, {
					name: "旅行一次性用品"
				}, {
					name: "瑜伽美体"
				}, {
					name: "运动附件"
				}, {
					name: "游泳装备"
				}, {
					name: "高颜值PC箱"
				}, {
					name: "球类运动"
				}, {
					name: "铝镁合金箱"
				}, {
					name: "登机箱"
				}, {
					name: "托运箱"
				}, {
					name: "出行配件"
				}, {
					name: "户外运动鞋"
				}, {
					name: "行李箱"
				}, {
					name: "健身大器械"
				}, {
					name: "城市出行"
				}, {
					name: "运动护具"
				}, {
					name: "健身小器械"
				}, {
					name: "运动按摩"
				}, {
					name: "垂钓"
				}, {
					name: "极限运动"
				}, {
					name: "户外装备"
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