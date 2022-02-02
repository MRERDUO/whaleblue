<template>
  <div class="loginContent-module">
    <div class="loginContent-module-content">
      <Tabs class="login-content-tabs">
        <Tab-pane label="手机号登录">
          <div class="tab-pane1">
            <a class="tab-pane1-a" @click="change" v-show="change1">短信快捷登录</a>
            <a class="tab-pane1-a" @click="change" v-show="change2">使用密码验证登录</a>
            <Input
              type="text"
              v-model="value1"
              placeholder="请输入手机号"
              >
                <img src="../assets/phone.png" class="i-input-img" slot="prepend">
            </Input>

            <Input
              type="password"
              v-model="value2"
              placeholder="请输入密码"
              v-show="change1"
              >
                <img src="../assets/pwd.png" class="i-input-img" slot="prepend">
            </Input>

            <Input
              v-show="change2"
              type="text"
              placeholder="请输入短信验证码"
              v-model="value5"
              >
              <button class="login-conent-input-btn" slot="append">获取验证码</button>
            </Input>

          </div>
        </Tab-pane>

        <Tab-pane label="邮箱登录">
          <div class="tab-pane1">
            <Input
              type="text"
              v-model="value3"
              placeholder="请输入邮箱"
              >
                <img src="../assets/user.png" class="i-input-img" slot="prepend">
            </Input>
            <Input
              type="password"
              v-model="value4"
              placeholder="请输入密码"
              >
                <img src="../assets/pwd.png" class="i-input-img" slot="prepend">
            </Input>
          </div>
        </Tab-pane>
      </Tabs>

      <Button type="primary" class="login-btn" @click="go">登录</Button>
      <Button class="register-btn" @click="goRegister">注册</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loginContent-module',
    data() {
      return {
        value1:'',
        value2:'',
        value3:'',
        value4:'',
        value5:'',
        change1:true,
        change2:false
      }
    },
    methods:{
      go(){
        console.log("你点击了登录")
      },
      goRegister(){
        this.$router.push("/register")
      },
      change(){
        console.log("dian ji")
        this.change1 = !this.change1;
        this.change2 = !this.change2;
      }
    }
  }
</script>

<style scoped>
  .loginContent-module {
    background-image: url("../assets/login-bg.jpeg");
    display: flex;
    height: 600px;
    justify-content: center;
    align-items: center;
  }

  .loginContent-module-content {
    border-radius: 10px;
    padding: 30px 0px 30px 0px;
    background-color: #fff;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-content-tabs{
    width: 90%;
  }

  .i-input-img{
    width: 20px;
  }

  .tab-pane1{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
  }

  .tab-pane1-a{
    color: #657180;
    align-self: flex-end;
  }

  .tab-pane1-a:hover{
    color:#3399ff ;
  }

  .login-btn{
    width: 90%;
    margin-top: 10px;
  }

  .register-btn{
    width:90%;
    margin-top:10px;
  }

  .login-conent-input-btn{
    border: 0px;
    color: #657180;
  }

  .login-conent-input-btn:hover{
    color: #3399FF;
    cursor: pointer;
  }
</style>
