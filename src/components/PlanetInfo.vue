<template>
  <mu-container>
    <mu-paper class="planet-paper" :z-depth="3">
      <div class="paper-close" @click="close">
        <svg viewBox="0 0 24 24" class="mu-chip-delete-icon "><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
      </div>
      <mu-card class="planet-card" style="">
        <mu-card-header title="星球简介" sub-title="Planet Intro">
          <mu-avatar slot="avatar">
            <img src="../assets/planet1.png">
          </mu-avatar>
        </mu-card-header>
        <mu-card-media class="card-media" title="布局星球" sub-title="Layout planet">
        </mu-card-media>
        <mu-card-text class="card-text">
          在这个星球上面有不同CSS布局的区域例如盒式模型，flex弹性盒子模型，grid栅格模型等。通过这里的任务可以掌握不同布局模型及其布局属性的使用
        </mu-card-text>
        <!-- <mu-card-actions>
          <mu-button flat>Action 1</mu-button>
          <mu-button flat>Action 2</mu-button>
        </mu-card-actions> -->
      </mu-card>
      <mu-paper :z-depth="1" class="planet-list">
        <mu-appbar color="primary">
          <mu-button icon slot="left">
            <mu-icon value="M"></mu-icon>
          </mu-button>任务列表
        </mu-appbar>
        <mu-list toggle-nested>
          <mu-list-item
            button
            :ripple="false"
            nested
            :open="open === 'drafts'"
            @toggle-nested="open = arguments[0] ? 'drafts' : ''"
          >
            <mu-list-item-action>
              <mu-icon value="assignment"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>盒式布局模型</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>
          <mu-list-item
            button
            :ripple="false"
            nested
            :open="open === 'send'"
            @toggle-nested="open = arguments[0] ? 'send' : ''"
          >
            <mu-list-item-action>
              <mu-icon value="assignment"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Flex布局模型</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>
            <mu-list-item button :ripple="false" slot="nested" v-for="mission in missionList" :key="mission.missionId">
              <mu-list-item-action>
                <mu-icon class="toggle-icon" size="24" :value=missionStatus[mission.missionStatus]></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title @click="openEditor(mission.missionId)">{{mission.missionName}}</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>
          <mu-list-item
            button
            :ripple="false"
            nested
            :open="open === 'inbox'"
            @toggle-nested="open = arguments[0] ? 'inbox' : ''"
          >
            <mu-list-item-action>
              <mu-icon value="assignment"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Grid布局模型</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>

        </mu-list>
      </mu-paper>
    </mu-paper>
  </mu-container>
</template>

<script>
export default {
  data () {
    return {
      missionStatus: ['star_border', 'star_half', 'star']
    }
  },
  props: ['missionList'],
  methods: {
    openEditor (missionId) {
      this.$store.dispatch('setCurrentMissionAct', missionId)
      this.$router.push('/editor')
    }
  }
}
</script>

<style lang="scss" scoped>
.planet-paper{
    width: 900px;
    height: 700px;
    position: relative;
    top: 50px;
    border-radius: 10px;
    margin: auto;
    z-index: 1;
    background-color: rgba(255,255,255,0.8);
    padding:30px;
    .paper-close{
      position: absolute;
      right: 15px;
      top:8px;
    }
    .planet-card{
      display: inline-block;
      width: 100%;
      height: 100%;
      max-width: 400px;
      .card-media{
        height: 300px;
        background-image: url('../assets/planet1.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .card-text{
        font-size: 18px;
      }
    }
    .planet-list {
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 100%;
      margin-left: 30px;
      max-width: 400px;
      overflow: hidden;
    }
}

</style>
