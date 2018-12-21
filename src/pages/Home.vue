<template>
  <div class="m-home">
    <planet-info v-if="showPlanetInfoStatus" :missionList='currentMissionList'></planet-info>
    <user-info v-if="showUserInfoStatus"></user-info>
    <div class="home_planets">
      <div class="planet_1 planet">
        <div class="planet_main" @click="openPlanetInfo(1)"></div>
        <mu-chip class="planet_tip">
          布局星球
        </mu-chip>
      </div>
      <div class="planet_2 planet">
        <div class="planet_main"></div>
        <mu-chip class="planet_tip">
          神秘星球
        </mu-chip>
      </div>
      <div class="planet_3 planet">
        <div class="planet_main"></div>
        <mu-chip class="planet_tip">
          神秘星球
        </mu-chip>
      </div>
      <div class="planet_4 planet">
        <div class="planet_main"></div>
        <mu-chip class="planet_tip">
          神秘星球
        </mu-chip>
      </div>
      <div class="planet_5 planet">
        <div class="planet_main"></div>
        <mu-chip class="planet_tip">
          神秘星球
        </mu-chip>
      </div>
      <div class="planet_6 planet">
        <div class="planet_main"></div>
        <mu-chip class="planet_tip">
          神秘星球
        </mu-chip>
      </div>
      <div class="planet_7 planet">
        <div class="planet_main"></div>
        <mu-chip class="planet_tip">
          神秘星球
        </mu-chip>
      </div>
    </div>
    <div class="home_dashboard">
      <div class="userInfo-btn">
        <div class="btn-text" @click="openUserInfo()">船员信息</div>
      </div>
      <div class="dashboard"></div>
      <div class="logout-btn" @click="logout()">
        <div class="btn-text">船员登出</div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanetInfo from '../components/PlanetInfo.vue'
import UserInfo from '../components/UserInfo.vue'

export default {
  name: 'Home',
  data () {
    return {
      showPlanetInfoStatus: false,
      showUserInfoStatus: false,
      userPlanetList: {},
      currentMissionList: []
    }
  },
  components: {
    PlanetInfo,
    UserInfo
  },
  mounted () {
    this.getUserPlanetList(this.$store.getters.getUserInfo.userId)
  },
  methods: {
    openUserInfo () {
      this.showUserInfoStatus = !this.showUserInfoStatus
    },
    async getUserPlanetList (userId) {
      try {
        let params = {
          userId: userId
        }
        let res = await this.$api.planet.getUserPlanetList(params)
        if (res.code === 1) {
          this.$store.dispatch('setUserPlanetListAct', res.data.planetList)
          this.userPlanetList = res.data.planetList
        }
      } catch (e) {
        this.$alert('e', 'Alert')
      }
    },
    async openPlanetInfo (planetId) {
      try {
        let params = {
          planetId: planetId
        }
        let res = await this.$api.planet.getPlanetInfo(params)
        if (res.code === 1) {
          this.$store.dispatch('setCurrentPlanetAct', res.data.planetInfo)
          this.getPlanetMissionList(planetId)
          this.showPlanetInfoStatus = !this.showPlanetInfoStatus
        }
      } catch (e) {
        this.$alert('e', 'Alert')
      }
    },
    getPlanetMissionList (planetId) {
      this.userPlanetList.forEach(ele => {
        if (ele.planetId === planetId) {
          this.currentMissionList = ele.missionList
        }
      })
    },
    logout () {
      sessionStorage.setItem('userInfo', {})
      sessionStorage.setItem('userToken', '')
      this.$store.dispatch('changeUserStatusAct', null)
      this.$store.dispatch('setUserTokenAct', '')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.m-home{
  background-image: url('../assets/homeBG.png');
  height: 100vh;
  width: 100%;
  background-size: cover;
  .home_planets{
    .planet{
      position: absolute;
      .planet_tip{
        opacity: 0;
        position:absolute;
        top: 0;
        right: -10px;
        font-size: 20px;
        color: indigo;
      }
      .planet_main{
        cursor: pointer;
      }
      .planet_main:hover{
        transition: 0.3s;
        filter:drop-shadow(0px 0px 10px #FFFFFF);
        & + .planet_tip{
          transition: 1s;
          opacity: 1;
        }
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
     .planet_2 {
      left: 410px;
      top: 80px;
      .planet_main{
        height: 240px;
        width: 240px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/planet2.png');
      }
    }
     .planet_3 {
      left: 450px;
      top: 525px;
      .planet_main{
        height: 310px;
        width: 330px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/planet3.png');
      }
    }
     .planet_4 {
      left: 1150px;
      top: 570px;
      .planet_main{
        height: 280px;
        width: 240px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/planet4.png');
      }
    }
     .planet_5 {
       left: 1100px;
      top: -100px;
      .planet_main{
        height: 350px;
        width: 350px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/planet5.png');
      }
    }
     .planet_6 {
      left: 1450px;
      top: 300px;
      .planet_main{
        height: 300px;
        width: 300px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/planet6.png');
      }
    }
     .planet_7 {
      left: 800px;
      top: 150px;
      .planet_main{
        height: 200px;
        width: 200px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/planet7.png');
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
      transition: 0.3s;
      filter:drop-shadow(2px 2px 5px rgba(255,255,255,0.5))
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
      transition: 0.3s;
      filter:drop-shadow(2px 2px 5px rgba(255,255,255,0.5))
    }
  }

}
</style>
