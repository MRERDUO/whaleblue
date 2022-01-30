<template>
  <div class="footer-module">
    <div class="footerModule-up">
      <div class="footerModule-up-box">
        <img class="i-up-footerModule" src="@/assets/dun.png" alt="" />
        <span class="up-box-text">30天无忧退换货</span>
      </div>
      <div class="footerModule-up-box">
        <img class="i-up-footerModule" src="@/assets/huoche.png" alt="" />
        <span class="up-box-text">满99元免邮费</span>
      </div>
      <div class="footerModule-up-box">
        <img class="i-up-footerModule" src="@/assets/pinzhi.png" alt="" />
        <span class="up-box-text">品质保证</span>
      </div>
    </div>
    <hr style="border:1px solid #e3e8ee;width:1000px;margin:0 auto;" />
    <div class="footerModule-down">
        <div class="footerModule-down-box">
            <a
                v-for="(item,index) of footer_list"
                :key="index"
            >
                {{item.text}}
            </a>
        </div>
        <div class="footerModule-down-box">
            <a
                v-for="(item,index) of footer_list2"
                :key="index"
            >
                {{item.text}}
            </a>
        </div>
        <div class="footerModule-down-box">
            <a
                v-for="(item,index) of footer_list3"
                :key="index"
            >
                {{item.text}}
            </a>
        </div>
        <div class="footerModule-down-box">
            <a
                v-for="(item,index) of footer_list4"
                :key="index"
            >
                {{item.text}}
            </a>
        </div>
        <div class="footerModule-down-box">
            <a
                v-for="(item,index) of footer_list5"
                :key="index"
            >
                {{item.text}}
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerModule",
  data() {
    return {
        footer_list:[
            {
                text:'关于我们'
            },{
                text:'|'
            },{
                text:'帮助中心'
            },{
                text:'|'
            },{
                text:'售后服务'
            },{
                text:'|'
            },{
                text:'配送验收'
            },{
                text:'|'
            },{
                text:'商务合作'
            },{
                text:'|'
            },{
                text:'企业采购'
            },{
                text:'|'
            },{
                text:'开放平台'
            },{
                text:'|'
            },{
                text:'搜索推荐'
            },{
                text:'|'
            },{
                text:'友情链接'
            },{
                text:'|'
            },{
                text:'廉正举报'
            }
        ],
        footer_list2:[
            {
                text:'食品经营许可证：ZCY200301290801117'
            },{
                text:'出版物经营许可证：新出发滨字第0129号'
            },{
                text:'妙得ICP证号：ICP 证浙B2-20210129'
            },{
                text:'浙杭食药监械经营备20171029号'
            },{
                text:'营业执照'
            },{
                text:'ek公司版权所有 © 1997-2021'
            }
        ],
        footer_list3:[
            {
                text:'无线电发射设备销售备案：42202011096855'
            },{
                text:'（浙杭）网械企备字[2019]第00119号'
            },{
                text:'（粤）网械平台备字（2019）第00004号'
            },{
                text:'（粤）-非经营性-2016-0023'
            },{
                text:'进口冷链食品管理承诺书'
            }
        ],
        footer_list4:[
            {
                text:'食品经营许可证：JY14207050007694'
            },{
                text:'浙江省网络食品销售第三方平台提供者备案：浙网食A33010009'
            },{
                text:'单用途商业预付卡备案证：330100AAC0024'
            }
        ],
        footer_list5:[
            {
                text:'出版物网络交易平台服务经营备案：新出发浙备字第2021006号'
            }
        ]
    };
  },
};
</script>

<style scoped>
    .footer-module{
        width: 100%;
        background-color: #3399ff;
        padding-bottom: 20px;
    }

    .footerModule-up{
        width: 1000px;
        margin: 0 auto;
        height: 100px;
        line-height: 100px;
        display: flex;
        flex-direction: row;
    }

    .footerModule-up-box{
        flex: 1;
        display: inline-block;
        text-align: center;
    }

    .footerModule-up-box>img{
        width: 50px;
        height: 50px;
        padding:5px;
        border: 3px solid #fff;
        border-radius: 50px;
        vertical-align: middle;
    }

    .footerModule-up-box>span{
        color: #fff;
        margin-left: 10px;
        font-size: 18px;
    }

    .footerModule-down{
        width: 1000px;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }

    .footerModule-down-box{
        display: flex;
        flex-direction: row;
    }

    .footerModule-down-box>a{
        color: #657180;
        flex: 1;
        margin: 5px;
        text-align: center;
        white-space: nowrap;
    }

    .footerModule-down-box:nth-child(2){
        margin-left: -30px;
    }
</style>