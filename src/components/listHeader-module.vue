<template>
	<div class="listHeader-module">
		<div class="listHeader-top">
			<p>分类：</p>
			<div class="listHeader-top-box">
				<a v-for="(item,index) of top_list" :key="index">{{item.name}}</a>
			</div>
		</div>
		<div class="listHeader-center">
			<p>配送地区：</p>
			<div class="listHeader-center-box">
				<a v-for="(item,index) of center_list" :key="index">{{item.name}}</a>
			</div>
		</div>
		<div class="listHeader-bottom">
			<p>排序：</p>
			<div class="listHeader-bottom-box">
				<a>默认</a>
				<a>价格<img src="../assets/upDown.png"></a>
				<a>上架时间<img src="../assets/down.png"></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default ({
		name: "listHeader-module",
		props:["top_list"],
		data() {
			return {
				center_list: [{
					name: "全部"
				}, {
					name: "香港"
				}, {
					name: "澳门"
				}, {
					name: "台湾"
				}, {
					name: "日韩"
				}, {
					name: "亚洲"
				}, {
					name: "欧洲"
				}, {
					name: "美洲"
				}]
			}
		}
	})
</script>

<style scoped>
	.listHeader-module {
		width: 1000px;
		background-color: #fff;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin-top: 40px;
		padding-bottom: 30px;
	}

	.listHeader-top,
	.listHeader-center,
	.listHeader-bottom {
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		border-bottom: 1px dashed #e8e8e8;
		margin-top: 10px;
	}

	.listHeader-bottom{
		border-bottom: 1px solid #e8e8e8;
	}

	.listHeader-top>p,
	.listHeader-center>p,
	.listHeader-bottom>p {
		flex: 1;
		font-size: 14px;
		align-self: flex-start;
		margin: 0px;
		text-align: left;
		color: #9999a6;
	}

	.listHeader-top-box,
	.listHeader-center-box,
	.listHeader-bottom-box {
		flex: 11;
		text-align: left;
	}

	.listHeader-top-box>a,
	.listHeader-center-box>a,
	.listHeader-bottom-box>a {
		color: #657180;
		display: inline-block;
		margin-right: 20px;
		margin-bottom: 10px;
		font-size: 14px;
	}

	.listHeader-bottom-box>a>img {
		width: 10px;
	}

	.listHeader-top-box>a:hover,
	.listHeader-center-box>a:hover,
	.listHeader-bottom-box>a:hover {
		cursor: pointer;
		color: #3399ff;
	}
</style>
