<template>
  <div class="m-entrance">
    <div class="entrance_wrap">
        <img src="../assets/TT.png" alt="SEXTANT" class="entrance_tittle">
        <h2 class="entrance_subtittle" id="byline">
          <div class="entrance_subtittle-item">六</div>
          <div class="entrance_subtittle-item">分</div>
          <div class="entrance_subtittle-item">仪</div>
        </h2>
        <mu-fade-transition >
          <div v-if="status === 'ship'" >
            <div class="entrance_ship"></div>
            <div class="entrance_btn">
              <div class="entrance_loginBtn" @click="changeStatus('login')">
                <div class="entrance_loginBtn-img"></div>
                <div class="entrance_loginBtn-text">Login</div>
              </div>
              <div class="entrance_registerBtn" @click="changeStatus('register')">
                <div class="entrance_registerBtn-img"></div>
                <div class="entrance_registerBtn-text">Register</div>
              </div>
            </div>
          </div>
          <div v-else-if="status === 'login'" class="entrance_login">
            <mu-container class="mu-container" >
              <mu-form ref="form" :model="validateForm" class="mu-login-form mu-form" >
                <mu-form-item label="用户名"  prop="username" :rules="usernameRules">
                  <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="密码" prop="password" :rules="passwordRules">
                    <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="isAgree" :rules="argeeRules">
                  <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
                </mu-form-item>
                <mu-form-item>
                  <mu-button color="primary" @click="login">登录</mu-button>
                  <mu-button @click="changeStatus('ship')">返回</mu-button>
                </mu-form-item>
              </mu-form>
            </mu-container>
          </div>
          <div v-else-if="status === 'register'" class="entrance_register">
            <mu-container class="mu-container">
              <mu-form ref="form" :model="validateForm" class="mu-register-form mu-form">
                <mu-form-item label="用户名"  prop="username" :rules="usernameRules">
                  <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="密码" prop="password" :rules="passwordRules">
                    <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="确认密码" prop="rePassword" :rules="passwordRules">
                    <mu-text-field type="password" v-model="validateForm.rePassword" prop="rePassword"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="isAgree" :rules="argeeRules">
                  <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
                </mu-form-item>
                <mu-form-item>
                  <mu-button color="primary" @click="register">注册</mu-button>
                  <mu-button @click="changeStatus('ship')">返回</mu-button>
                </mu-form-item>
              </mu-form>
            </mu-container>
          </div>
        </mu-fade-transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Entrance',
  data () {
    return {
      msg: 'Welcome to Sextant',
      status: 'ship',
      usernameRules: [
        {validate: (val) => !!val, message: '必须填写用户名'},
        {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        {validate: (val) => !!val, message: '必须填写密码'},
        {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
      validateForm: {
        username: '',
        password: '',
        rePassword: '',
        isAgree: false
      }
    }
  },
  mounted () {
  },
  methods: {
    changeStatus (status) {
      this.status = status
    },
    async login () {
      try {
        let params = {
          username: this.validateForm.username,
          password: this.validateForm.password
        }
        let res = await this.$api.user.auth(params)
        if (res.code === 1) {
          sessionStorage.setItem('userInfo', res.data.userInfo)
          sessionStorage.setItem('userToken', res.data.userToken)
          this.$store.dispatch('changeUserStatusAct', res.data.userInfo)
          this.$store.dispatch('setUserTokenAct', res.data.userToken)
          this.$router.push('/home')
        }
      } catch (e) {
        this.$alert('e', 'Alert')
      }
    },
    async register () {
      try {
        let params = {
          username: this.validateForm.username,
          password: this.validateForm.password,
          rePassword: this.validateForm.rePassword
        }
        let res = await this.$api.user.register(params)
        if (res.code === 1) {
          sessionStorage.setItem('userInfo', res.data.userInfo)
          sessionStorage.setItem('userToken', res.data.userToken)
          this.$store.dispatch('changeUserStatusAct', res.data.userInfo)
          this.$store.dispatch('setUserTokenAct', res.data.userToken)
          this.$router.push('/home')
        }
      } catch (e) {
        this.$alert('e', 'Alert')
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.m-entrance{
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/bgss.png');
  background-size: cover;
  .entrance_wrap{
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .entrance_tittle {
    height: 100px;
    animation: tittle 6s ease-out;
  }
  .entrance_subtittle {
    text-align: center;
    color: #ffffff;
    font-family: "ITC Serif Gothic", Lato;
    font-size: 2.25em;
    letter-spacing: 0.4em;

    animation: move-byline 6s linear;

    .entrance_subtittle-item {
      display: inline-block;
      animation: spin-letters 6s linear;
    }
  }
  .entrance_ship{
    height: 100px;
    width: 200px;
    background-image: url('../assets/ship1.png');
    background-size: contain;
    margin: 50px auto;
  }
  .entrance_btn{
     margin-top: 100px;
      .entrance_loginBtn{
        display: inline-block;
        width: 150px;
        height: 40px;
        background: #ffffff;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 2px 4px 4px 0px
             rgba(84, 16, 148, 0.492);
        .entrance_loginBtn-img{
          display: inline-block;
          height: 30px;
          width: 30px;
          background-image: url('../assets/loginBtn.png');
          background-position-x: 5px;
          background-size: contain;
          background-repeat: no-repeat;
          margin: 5px;
        }
        .entrance_loginBtn-text{
          height: 40px;
          width: 105px;
          line-height: 40px;
          display: inline-block;
          vertical-align: top;
          text-align: center;
          background-color: #7768ff;
          font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-size: 18px;
          letter-spacing: 1px;
          color: #ffffff;
        }
      }
      .entrance_registerBtn{
        display: inline-block;
        vertical-align: top;
        width: 150px;
        height: 40px;
        background: #ffffff;
        margin-left: 50px;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 2px 4px 4px 0px
                  rgba(84, 16, 148, 0.492);
        .entrance_registerBtn-img{
          display: inline-block;
          height: 30px;
          width: 30px;
          background-image: url('../assets/registerBtn.png');
          background-size: contain;
          background-position-x: 8px;
          background-repeat: no-repeat;
          margin: 5px;
        }
        .entrance_registerBtn-text{
          height: 40px;
          width: 105px;
          line-height: 40px;
          display: inline-block;
          vertical-align: top;
          text-align: center;
          background-color: #7768ff;
          font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-size: 18px;
          letter-spacing: 1px;
          color: #ffffff;
        }
      }
  }

  .mu-container{
    background-color: rgba(228, 208, 228, 0.459);
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 4px 4px 0px
              rgba(84, 16, 148, 0.492);
    .mu-form {
      width: 100%;
      max-width: 460px;
      background-color: #ffffff;
      padding: 20px;
      box-shadow: 0 3px 16px -5px rgba(203, 16, 228, 0.459);
    }
  }

}
/* Keyframes */
@keyframes clipMe {
  0% {clip: rect(0px, 250px, 2px, 0px); }
  25% {clip: rect(0px, 2px, 250px, 0px); }
  50% {clip: rect(248px, 250px, 250px, 0px); }
  75% {clip: rect(0px, 250px, 250px, 248px); }
  100% {clip: rect(0px, 250px, 2px, 0px); }
}

@keyframes tittle {
  0% {
    opacity: 0;
    transform: scale(1.5) translateY(-0.75em);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes spin-letters {
  0%, 10% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    transform: rotateY(90deg);
  }
  95%, 100% {
    transform: rotateY(0);
    opacity: 1;
  }
}

@keyframes move-byline {
   0% {
    opacity: 0;
    transform: scale(1.5) translateY(0.25em);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
