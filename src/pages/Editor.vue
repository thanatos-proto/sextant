
<template>
  <div class="m-editor">
    <div class="editor-wrap-left" >
      <mu-card class="editor-intro" >
        <mu-card-header class="intro-head" title="布局星球" sub-title="Layout Planet">
          <mu-avatar slot="avatar">
            <img src="../assets/planet1.png">
          </mu-avatar>
        </mu-card-header>
        <mu-card-text class="story-text">
          船长！ 大事不妙！ 我们的船员被星球上的风暴刮上了天！<br>
          幸好船员们身上有<span>flex</span>布局保护。这时候我们可以通过<span>align-items</span>属性将他们救下来！
        </mu-card-text>
        <div class="property-wrap">
          <mu-card-text>
            <h3> X船长备忘录：</h3><p>关于<span> align-items</span>的使用方法</p>
            <p><span>flex-start</span>：项目对齐容器的顶部。</p>
            <p> <span>flex-end</span>：项目对齐容器的底部。</p>
            <p> <span>center</span>：项目在容器的垂直中心对齐。</p>
            <p> <span>baseline</span>：项目显示在容器的基线处。</p>
            <p> <span>stretch</span>：项目被拉伸以适合容器。</p>
          </mu-card-text>
        </div>
      </mu-card>
      <mu-paper class="editor-code" :z-depth="3">
        <mu-card-header class="code-head" title="代码编辑区" sub-title="Code Area">
          <mu-avatar slot="avatar">
            <mu-icon right value="code"></mu-icon>
          </mu-avatar>
        </mu-card-header>
        <div class="code-input">
          <div class="number">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10</div>
                  <div class="code">
                    <pre>
      .astronauts {
        display: flex;
        justify-content: space-around;</pre>
                    <textarea class="inputCSS"/>
                    <pre>
        }
                    </pre>
                  </div>
          </div>
      </mu-paper>
    </div>
    <div class="editor-wrap-right" >
      <mu-paper class="editor-btns" :z-depth="3">
        <mu-button>
          返回太空
          <mu-icon right value="exit_to_app"></mu-icon>
        </mu-button>
        <mu-button>
          任务列表
          <mu-icon right value="assignment"></mu-icon>
        </mu-button>
        <mu-button color="primary">
          还原任务
          <mu-icon right value="rotate_right"></mu-icon>
        </mu-button>
        <mu-button color="primary">
          保存任务
          <mu-icon right value="cloud_upload"></mu-icon>
        </mu-button>
        <mu-button color="primary">
          提交任务
          <mu-icon right value="send"></mu-icon>
        </mu-button>
      </mu-paper>
      <mu-paper class="editor-scene" :z-depth="3">
        <mu-card-header class="scene-head" title="场景显示区" sub-title="Scene Area">
          <mu-avatar slot="avatar">
            <mu-icon right value="visibility"></mu-icon>
          </mu-avatar>
        </mu-card-header>
        <div class="scene-main">
          <div class="astronauts">
            <div class="astronaut-1"></div>
            <div class="astronaut-2"></div>
            <div class="astronaut-3"></div>
            <div class="astronaut-4"></div>
          </div>
        </div>
      </mu-paper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      inputCSS: ''
    }
  },
  methods: {
    formatCSS (className) { // eslint-disable-next-line
      var reStr = `\.${className}'[\s]*\{[^\}]+?\}`
      var re = new RegExp(reStr, 'gi')
      return this.inputCSS.match(re)
    }
  }
}
</script>

<style lang="scss" scoped>
.m-editor {
  background-image: url("../assets/EEBG.png");
  background-size: cover;
  background-position: right;
  height: 100vh;
  width: 100vw;
  text-align: center;
  .editor-wrap-left{
    display: inline-block;
    vertical-align: top;
    height: 850px;
    position: relative;
    top: 50px;
    border-radius: 10px;
    margin-right: 20px;
    .editor-intro{
      width: 700px;
      height: 340px;
      text-align: left;
      background-color: rgb(245, 196, 196);
      .intro-head{
        background-color: rgba(0, 0, 0, 0.918);
        .mu-card-title{
          color: #ffffff;
        }
        .mu-card-sub-title{
          color: #ffffff;
        }
      }
      span{
        padding: 2px 3px;
        background-color: rgba(200, 143, 233, 0.4);
        Font-size: 15px;
        color: rgba(255, 255, 255, 0.9);
        white-space: nowrap;
      }
      .story-text{
        font-size: 16px;
        margin-left:20px;
      }
      .property-wrap{
        height: 150px;
        width: 650px;
        background-image: url('../assets/tip.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin-left:20px;
        padding: 5px 0 0 70px;
        line-height: 25px;
        font: 15px sans-serif;
        h3{
          display: inline-block;
          margin: 3px;
          font: 20px sans-serif;
        }
        p{
          margin: 0;
          line-height: 24px;
          display: inline-block;
        }
      }
    }
    .editor-code{
      background-color: rgba(0,0,0,.54);
      text-align: left;
      margin-top: 20px;
      height: 460px;
      .code-head{
        background-color: rgba(0, 0, 0, 0.918);
         .mu-card-title{
          color: #ffffff;
        }
        .mu-card-sub-title{
          color: #ffffff;
        }
      }
      .code-input{
        width: 100%;
        max-width: 800px;
        padding: 30px;
        color: #f5d2b2f6;
        font: 16px sans-serif;
        .number{
          vertical-align: top;
          display: inline-block;
          line-height: 25px;
        }
        .code{
          width: 500px;
          margin-left:10px;
          vertical-align: top;
          line-height: 25px;
          display: inline-block;
          .inputCSS{
            margin-left: 47px;
            width: 533px;
            border: 0;
            padding: 0;
            display: block;
            line-height: 25px;
          }
        }
      }
    }
  }
  .editor-wrap-right{
    display: inline-block;
    vertical-align: top;
    height: 850px;
    position: relative;
    top: 50px;
    border-radius: 10px;
    .editor-btns{
      width: 800px;
      height: 78px;
      max-width: 800px;
      background-color: rgba(0,0,0,.54);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .editor-scene{
      margin-top: 20px;
      width: 100%;
      max-width: 800px;
      .scene-head{
        background-color: rgba(0, 0, 0, 0.918);
        text-align: left;
          .mu-card-title{
            color: #ffffff;
          }
          .mu-card-sub-title{
            color: #ffffff;
          }
      }
      .scene-main{
        height: 646px;
        background-image: url('../assets/EBG.png');
        background-position: center;
        padding: 30px;
      }
      .astronauts{
        display: flex;
        justify-content: space-around;
        // align-items: flex-end;
        height: 100%;
        width: 100%;
        .astronaut-1 {
          width: 80px;
          height: 113px;
          background-image: url('../assets/Apa.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
        .astronaut-2 {
          width: 57px;
          height: 76px;
          background-image: url('../assets/Adog.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
        .astronaut-3 {
          width: 79px;
          height: 113px;
          background-image: url('../assets/Ama.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
        .astronaut-4 {
          width: 87px;
          height: 95px;
          background-image: url('../assets/Aye.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
