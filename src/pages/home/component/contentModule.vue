<template>
    <div class="contentPage">
        <recommend-module></recommend-module>
        <div class="content">
            <goods-module :list="list1" :text="title1" :image="image1" :box_list="box_list1"></goods-module>
            <goods-module :list="list2" :text="title2" :image="image2" :box_list="box_list2"></goods-module>
            <goods-module :list="list3" :text="title3" :image="image3" :box_list="box_list3"></goods-module>
            <goods-module :list="list4" :text="title4" :image="image4" :box_list="box_list4"></goods-module>
            <goods-module :list="list5" :text="title5" :image="image5" :box_list="box_list5"></goods-module>
            <goods-module :list="list6" :text="title6" :image="image6" :box_list="box_list6"></goods-module>
            <goods-module :list="list7" :text="title7" :image="image7" :box_list="box_list7"></goods-module>
        </div>
    </div>
</template>

<script>
import GoodsModule from './goodsModule.vue'
import recommendModule from './recommendModule.vue'

export default {
    name:'contentPage',
    data(){
        return{
            title1:"居家生活",
            list1:[
                {
                    name:'收纳家饰'
                },{
                    name:'好物精选'
                },{
                    name:'疫情防控'
                },{
                    name:'北欧原木'
                },{
                    name:'家庭医疗'
                },{
                    name:'餐厨爆款清单'
                },{
                    name:'厨房电器'
                }
            ],
            image1:require("@/assets/jiajvshenghuo.jpeg"),
            box_list1:[
                {
                    name:"金橡树 好眠 乳胶海绵床垫 90*200*6cm",
                    price:"￥289",
                    image:require("@/assets/jiajv1.jpg")
                },{
                    name:"恒兴达 胡桃木实木衣柜组合轻奢简约经济型卧室衣橱三门/四门/五门大衣柜",
                    price:"￥3299",
                    image:require("@/assets/jiajv2.jpg")
                },{
                    name:"SUPOR 苏泊尔 SF40FC596 电饭煲",
                    price:"￥299",
                    image:require("@/assets/jiajv3.jpg")
                },{
                    name:"Redmi 红米 X系列 2022款 L55R8-X 液晶电视 游戏电视 4K 55英寸",
                    price:"￥2699",
                    image:require("@/assets/jiajv4.jpg")
                }
            ],
            title2:"服饰鞋包",
            list2:[
                {
                    name:'轻羽系列'
                },{
                    name:'保暖系列'
                },{
                    name:'羊毛绒系列'
                },{
                    name:'职场系列'
                },{
                    name:'男士衬衫'
                },{
                    name:'运动潮服系列'
                },{
                    name:'男士针织衫'
                }
            ],
            image2:require("@/assets/fushixiebao.jpeg"),
            box_list2:[
                {
                    name:"DECATHLON 迪卡侬 CROB 8359660 男款运动背心",
                    price:"￥64.9",
                    image:require("@/assets/fushi1.jpg")
                },{
                    name:"La Chapelle 拉夏贝尔 加厚针织套装女装网红两件套洋气时尚慵懒风毛衣两件套连",
                    price:"￥103.5",
                    image:require("@/assets/fushi2.jpg")
                },{
                    name:"OFF-WHITE 女士缀饰斜挎包",
                    price:"￥4149",
                    image:require("@/assets/fushi3.jpg")
                },{
                    name:"Bershka 巴适卡 05355335505 男款潮流百搭休闲裤",
                    price:"￥38",
                    image:require("@/assets/fushi4.jpg")
                }
            ],
            title3:"美食酒水",
            list3:[
                {
                    name:'肉类零食'
                },{
                    name:'美味上新'
                },{
                    name:'中秋礼遇'
                },{
                    name:'饼干糕点'
                },{
                    name:'小食糖巧'
                },{
                    name:'爆款美食'
                },{
                    name:'坚果炒货'
                }
            ],
            image3:require("@/assets/meishijiushui.jpeg"),
            box_list3:[
                {
                    name:"Anchor 安佳 成人全脂奶粉 1kg",
                    price:"￥48.9",
                    image:require("@/assets/meishi1.jpg")
                },{
                    name:"LANGJIU 郎酒 青花郎 陈酿 53度 单瓶装 高度白酒 500ml 酱香型",
                    price:"￥939",
                    image:require("@/assets/meishi2.jpg")
                },{
                    name:"盛晨！酸奶果粒燕麦片508g！",
                    price:"￥13.8",
                    image:require("@/assets/meishi3.jpg")
                },{
                    name:"ZHOU HEI YA 周黑鸭 鸭脖鸭锁骨 3盒装",
                    price:"￥27.8",
                    image:require("@/assets/meishi4.jpg")
                }
            ],
            title4:"个护清洁",
            list4:[
                {
                    name:'七夕多商品券'
                },{
                    name:'中秋团圆礼'
                },{
                    name:'99划算节'
                },{
                    name:'爆款榜单'
                },{
                    name:'新品尝鲜'
                },{
                    name:'基础护肤'
                },{
                    name:'卸妆洁面'
                }
            ],
            image4:require("@/assets/gehuqingjie.jpeg"),
            box_list4:[
                {
                    name:"护肤洁面油250ml护肤品深层清洁卸妆油温和",
                    price:"￥437",
                    image:require("@/assets/gehu1.jpg")
                },{
                    name:"男士焕活保湿洁面霜120g洁面护肤品控油",
                    price:"￥418",
                    image:require("@/assets/gehu2.jpg")
                },{
                    name:"YAZIMIQI氨基酸沐浴露水蜜桃味持久留香保湿滋养男女沐浴啫喱",
                    price:"￥29.9",
                    image:require("@/assets/gehu3.jpg")
                },{
                    name:"RNW 如薇 神经酰胺肌底焕活精华保湿喷雾10",
                    price:"￥89",
                    image:require("@/assets/gehu4.jpg")
                }
            ],
            title5:"母婴亲子",
            list5:[
                {
                    name:'黑马好物'
                },{
                    name:'母婴热销'
                },{
                    name:'婴儿奶粉'
                },{
                    name:'辅食营养品'
                },{
                    name:'尿裤纸品'
                },{
                    name:'洗护'
                },{
                    name:'喂养'
                }
            ],
            image5:require("@/assets/muyingqinzi.jpeg"),
            box_list5:[
                {
                    name:"babycare 飞享系列 纸尿裤 L40片",
                    price:"￥129",
                    image:require("@/assets/muying1.jpg")
                },{
                    name:"a2 艾尔 婴儿奶粉 2段 900g 2罐装",
                    price:"￥696",
                    image:require("@/assets/muying2.jpg")
                },{
                    name:"SKECHERS 斯凯奇 女童网面运动鞋",
                    price:"￥159",
                    image:require("@/assets/muying3.jpg")
                },{
                    name:"MooMoo 莫莫 漫威童男童羽绒服冬新款儿童时尚连帽厚外套潮",
                    price:"￥208.8",
                    image:require("@/assets/muying4.jpg")
                }
            ],
            title6:"运动旅行",
            list6:[
                {
                    name:'雨具雨伞'
                },{
                    name:'重磅新品'
                },{
                    name:'健身塑形'
                },{
                    name:'旅行用品'
                },{
                    name:'乐享旅途'
                },{
                    name:'男士运动T恤'
                },{
                    name:'男士运动外套'
                }
            ],
            image6:require("@/assets/yundonglvxing.jpeg"),
            box_list6:[
                {
                    name:"OUNAIDE 欧耐德 单杠 引体向上器",
                    price:"￥54",
                    image:require("@/assets/yundong1.jpg")
                },{
                    name:"Umay 佑美 U15H 家用跑步机",
                    price:"￥899",
                    image:require("@/assets/yundong2.jpg")
                },{
                    name:"MOBI GARDEN 牧高笛 NX20561015 户外帐篷",
                    price:"￥215",
                    image:require("@/assets/yundong3.jpg")
                },{
                    name:"JEEP 吉普 Jeep/吉普秋冬高帮潮男鞋耐磨防滑减震登山鞋户外轻便舒适休闲鞋",
                    price:"￥292",
                    image:require("@/assets/yundong4.jpg")
                }
            ],
            title7:"数码家电",
            list7:[
                {
                    name:'热卖爆款'
                },{
                    name:'新品首发'
                },{
                    name:'清洁电器'
                },{
                    name:'两季电器'
                },{
                    name:'衣物护理'
                },{
                    name:'空气调节'
                },{
                    name:'身体护理'
                }
            ],
            image7:require("@/assets/shumajiadian.jpeg"),
            box_list7:[
                {
                    name:"Panasonic 松下 TK-AD59C RO台式净饮机 乳白色",
                    price:"￥1549",
                    image:require("@/assets/shuma1.png")
                },{
                    name:"京东京造 KJ410G-A01 空气净化器",
                    price:"￥579",
                    image:require("@/assets/shuma2.jpg")
                },{
                    name:"RAZER 雷蛇 北海巨妖 主机板 耳罩式头戴式降噪有线耳机 蓝色 3.5mm",
                    price:"￥389",
                    image:require("@/assets/shuma3.jpg")
                },{
                    name:"Apple 苹果 iPhone 13 5G智能手机 128GB",
                    price:"￥5399",
                    image:require("@/assets/shuma4.jpg")
                }
            ],
        }
    },
    components:{
        'recommend-module':recommendModule,
        GoodsModule
    }
}
</script>

<style scoped>
    .content{
        width: 1000px;
        margin: 0 auto;
    }
</style>