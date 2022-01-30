<template>
  <div class="Register">
    <div class="loginContent-module-content">
      <Tabs class="login-content-tabs">
        <Tab-pane label="手机号登录">
          <div class="tab-pane1">
            <Input
              type="text"
              v-model="phoneValue"
              placeholder="请输入手机号"
              >
                <img src="../assets/phone.png" class="i-input-img" slot="prepend">
            </Input>

            <Input
              type="password"
              v-model="phonePwdValue"
              placeholder="请输入密码"
              >
                <img src="../assets/pwd.png" class="i-input-img" slot="prepend">
            </Input>

            <Input
              type="password"
              v-model="phonePwdValue2"
              placeholder="请再次输入密码"
              >
                <img src="../assets/pwd.png" class="i-input-img" slot="prepend">
            </Input>

            <Input
              type="text"
              placeholder="请输入短信验证码"
              v-model="phoneVerificationCodeValue"
              >
              <button class="login-conent-input-btn" slot="append" @click="getVerificationCode(phone)">获取验证码</button>
            </Input>

          </div>
        </Tab-pane>

        <Tab-pane label="邮箱登录">
          <div class="tab-pane1">
            <Input
              type="text"
              v-model="emailValue"
              placeholder="请输入邮箱"
              >
                <img src="../assets/user.png" class="i-input-img" slot="prepend">
            </Input>
            <Input
              type="password"
              v-model="emailPwdValue"
              placeholder="请输入密码"
              >
                <img src="../assets/pwd.png" class="i-input-img" slot="prepend">
            </Input>
            <Input
              type="password"
              v-model="emailPwdValue2"
              placeholder="请再次输入密码"
              >
                <img src="../assets/pwd.png" class="i-input-img" slot="prepend">
            </Input>
            <Input
              type="text"
              placeholder="请输入验证码"
              v-model="emailVerificationCodeValue"
              >
              <button class="login-conent-input-btn" slot="append" @click="getVerificationCode(email)">获取验证码</button>
            </Input>
          </div>
        </Tab-pane>
      </Tabs>

      <Button type="primary" class="register-btn" @click="registerAccount">注册</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loginContent-module',
    data() {
      return {
        phoneValue:'',
        phonePwdValue:'',
        phonePwdValue2:'',
        phoneVerificationCodeValue:'',
        emailValue:'',
        emailPwdValue:'',
        emailPwdValue2:'',
        emailVerificationCodeValue:''
      }
    },
    methods:{
        registerAccount(){
            console.log('注册')
        },
        getVerificationCode(type){
            if(type==phone){
                console.log('获取手机验证码')    
            }else if(type==email) {
                console.log('获取邮箱验证码')
            }
        }
    }
  }
</script>

<style scoped>
.Register {
  background-image: url("../assets/login-bg.jpeg");
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
}

  .loginContent-module-content {
    background-color: #fff;
    width: 400px;
    height: 300px;
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
    justify-content: flex-start;
    height: 160px;
  }
  
  .tab-pane1>*{
      margin-bottom: 10px;
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