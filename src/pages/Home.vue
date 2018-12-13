<template>
  <div class="m-home">
    <div class="home_planets">
      <div class="planet_1 planet">
        <div class="planet_main"></div>
        <div class="planet_tip">
          <div class="line"></div>
          <div class="planet-name">布局星球</div>
        </div>
      </div>
    </div>
    <div class="home_dashboard">
      <div class="userInfo-btn">
        <div class="btn-text">船员信息</div>
      </div>
      <div class="dashboard"></div>
      <div class="logout-btn">
        <div class="btn-text">船员登出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entrance',
  data () {
    return {
      msg: 'Welcome to Sextant'
    }
  }
}
</script>

<style lang="scss" scoped>
.m-home{
  background-image: url('../assets/homeBG.png');
  height: 100vh;
  width: 100vw;
  background-size: cover;
  .home_planets{
    .planet{
      position: absolute;
      .planet_main{
        cursor: pointer;
      }
      .planet_main:hover{
        filter:drop-shadow(0px 0px 10px #FFFFFF)
      }
    }
    .planet_1 {
      left: 100px;
      top: 200px;
      .planet_main{
        height: 320px;
        width: 320px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/planet1.png');
      }
    }
  }
  .home_dashboard{
    position: fixed;
    width: 100%;
    bottom: 0;
    text-align: center;
    .userInfo-btn{
      cursor: pointer;
      display: inline-block;
      height: 70px;
      width: 225px;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('../assets/userInfoBtn.png');
      margin-bottom: 10px;

      .btn-text{
        font-size: 20px;
        margin-top: 3px;
        color: #ffffff;
      }
    }
    .userInfo-btn:hover{
        filter:drop-shadow(0px 0px 10px #FFFFFF)
    }
    .dashboard{
      display: inline-block;display: inline-block;
      vertical-align: bottom;
      height: 136px;
      width: 664px;
      margin: 0 10px;
      background-size: contain;
      background-repeat: no-repeat;background-image: url('../assets/dashboard.png')
    }
    .logout-btn{
      cursor: pointer;
      display: inline-block;
      height: 70px;
      width: 225px;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('../assets/logoutBtn.png');
      .btn-text{
        font-size: 20px;
        margin-top: 3px;
        color: #ffffff;
      }
    }
    .logout-btn:hover{
        filter:drop-shadow(0px 0px 10px #FFFFFF)
    }
  }

}
</style>
