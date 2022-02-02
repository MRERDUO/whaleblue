<template>
    <div class="fixedModule">
        <div id="target"></div>
        <div class="fixed-left">
            <div class="fixed-left-title">— 热销榜 —</div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/paihang.png" alt="">
                <p>全站<br/>热销榜</p>
            </div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/chuang.png" alt="">
                <p>居家<br/>生活榜</p>
            </div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/shuiyi.png" alt="">
                <p>服饰<br/>鞋包榜</p>
            </div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/jiuping.png" alt="">
                <p>美食<br/>酒水榜</p>
            </div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/shouji.png" alt="">
                <p>数码<br/>家电榜</p>
            </div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/maojin.png" alt="">
                <p>个护<br/>清洁榜</p>
            </div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/xinglixiang.png" alt="">
                <p>运动<br/>旅行榜</p>
            </div>
            <div class="fixed-left-box" @click="goListPage">
                <img src="@/assets/yingerche.png" alt="">
                <p>母婴<br/>亲子榜</p>
            </div>
        </div>

        <div class="fixed-bottom" v-show="a">
            <div class="fixed-bottom-box">
                广告位招租
            <img class="offBtn" @click="offThis" src="@/assets/guanbi.png">
            </div>
        </div>

        <div class="fixed-right">
            <div class="fixed-right-box">
                <img src="@/assets/erweima.png" alt="">
                <p>扫码领<br/><span>APP大额<br/>新人红包</span></p>
            </div>
            <div class="fixed-right-box">
                <img src="@/assets/dingyue.png" alt="">
                <p>订阅电子刊</p>
            </div>
            <div class="fixed-right-box">
                <img src="@/assets/kefu.png" alt="">
                <p>在线客服</p>
            </div>
            <div class="fixed-right-box" @click="goUp">
                <img src="@/assets/dingbu.png" alt="">
                <p>回顶部</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'fixedModule',
    data(){
        return{
            a:true,
            scrollTop:0
        }
    },
    mounted(){
        window.addEventListener('scroll',this.scrollToTop)
    },
    destroyed(){
        window.removeEventListener('scroll',this.scrollToTop)
    },
    methods:{
        offThis(){
            //关闭当前窗口
            this.a = false;
        },
        goListPage(){
            this.$router.push("/listPage")
        },
        goUp(){
            const that = this;
            let timer = setInterval(()=>{
                let ispeed = Math.floor(-that.scrollTop/5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if(that.scrollTop === 0){
                    clearInterval(timer)
                }
            },16)
        },
        scrollToTop(){
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
        }
    }
}
</script>

<style scoped>
    .fixed-left{
        position: fixed;
        width: 100px;
        height: 320px;
        border: 1px solid #e9eaec;
        border-radius: 10px;
        background-color: #fff;
        left:0px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        z-index: 2;
    }

    .fixed-left-box,.fixed-left-title{
        display: flex;
        border-bottom: 1px solid #e9eaec;
    }

    .fixed-left-box:last-child{
        border: 0px;
    }

    .fixed-left-box:hover{
        cursor: pointer;
    }

    .fixed-left-title{
        color: #2d8cf0;
        font-size: 16px;
        font-weight: 900;
    }

    .fixed-left-title{
        cursor: default;
    }

    .fixed-left-box:first-child{
        color: #2d8cf0;
    }

    .fixed-left-box>img{
        width: 25px;
        height: 25px;
        align-self: center;
        margin-right: 5px;
    }

    .fixed-left-box>p{
        font-size: 12px;
        align-self: center;
    }

    .fixed-left-box>p:hover{
        color: #2d8cf0;
    }

    .fixed-bottom{
        position: fixed;
        width: 100%;
        height: 90px;
        border: 1px solid #8a8a8a;
        background-color: rgba(0, 0, 0, 0.398);
        bottom: 0px;
        font-size: 50px;
        text-align: center;
        font-weight: 900;
        color: red;
        z-index: 3;
    }

    .fixed-bottom-box{
        position: absolute;
        width: 1000px;
        left: 50%;
        margin-left: -500px;
    }

    .offBtn{
        width: 20px;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 99;
    }

    .offBtn:hover{
        cursor: pointer;
    }

    .fixed-right{
        position: fixed;
        width: 100px;
        height: 320px;
        border: 1px solid #e9eaec;
        background-color: #fff;
        border-radius: 10px;
        right:0px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .fixed-right-box{
        text-align: center;
        border-bottom: 1px solid #e9eaec;
    }

    .fixed-right-box:hover{
        cursor: pointer;
    }

    .fixed-right-box>p>span{
        color: red;
    }

    .fixed-right-box>p:hover{
        color: #2d8cf0;
    }

    .fixed-right-box>img{
        width: 30px;
    }
</style>