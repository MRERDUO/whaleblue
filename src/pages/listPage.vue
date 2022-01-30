<template>
    <div class="indentPage">
        <list-header-module :top_list="top_list"></list-header-module>
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
    components: { ListHeaderModule,ListPageContentModule},
    name:'indexPage',
    data(){
        return{
            top_list: [{
					name: "全部"
				}, {
					name: "收纳家饰"
				}, {
					name: "好物精选"
				}, {
					name: "疫情防控"
				}, {
					name: "北欧原木"
				}, {
					name: "家庭医疗"
				}, {
					name: "餐厨爆款清单"
				}, {
					name: "厨房电器"
				}, {
					name: "中医保健"
				}, {
					name: "床品件套"
				}, {
					name: "浴室用品"
				}, {
					name: "被枕盖毯"
				}, {
					name: "床垫床褥"
				}, {
					name: "抱枕靠垫"
				}, {
					name: "家饰"
				}, {
					name: "居家布艺"
				}, {
					name: "客厅家具"
				}, {
					name: "卧室家具"
				}, {
					name: "办公家具"
				}, {
					name: "小件家具"
				}, {
					name: "灯具"
				}, {
					name: "地毯窗帘"
				}, {
					name: "收纳"
				}, {
					name: "晾晒除味"
				}, {
					name: "毛巾浴巾"
				}, {
					name: "品质锅具"
				}, {
					name: "餐厨配件"
				}, {
					name: "刀剪砧板"
				}, {
					name: "餐具"
				}, {
					name: "品茗茶具"
				}, {
					name: "水具杯壶"
				}, {
					name: "茶咖酒具"
				}, {
					name: "艺术藏品"
				}, {
					name: "宠物食品"
				}, {
					name: "宠物用品"
				}, {
					name: "中秋团圆礼"
				}],
        }
    }
}
</script>

<style scoped>
	.indentPage{
		margin-bottom: 50px;
	}
</style>