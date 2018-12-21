<template>
  <div>
    <mu-circular-progress :size="40" v-if="loading"/>
    <div v-html="SceneHtml" :style="SceneCSS"></div>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data () {
      return {
        missionId: 1,
        loading: false,
        SceneHtml: '',
        SceneCSS: ''
      }
    },
    mounted () {
      this.getCurrentMissionId()
      this.loadScene()
    },
    methods: {
      getCurrentMissionId () {
        this.missionId = this.$store.getters.getCurrentMissionId
      },
      async loadScene (missionId) {
        try {
          this.loading = true
          let params = {
            missionId: missionId
          }
          let res = await this.$api.mission.getMissionInfo(params)
          if (res.code === 1) {
            this.loading = false
            this.$store.dispatch('setCurrentMissionAct', res.data.missionInfo)
            this.SceneHtml = this.data.missionInfo.missionHtml
            this.SceneCSS = this.data.missionInfo.missionCSS
          }
        } catch (e) {
          this.loading = false
          this.$alert('e', 'Alert')
        }
      }
    }
  }
</script>
