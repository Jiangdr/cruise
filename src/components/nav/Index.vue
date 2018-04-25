<template>
  <main class="container">
    <header class="header clearFix">
      <div class="fr user">
        <span><span>Signed in as </span><a class="a-btn" href="javaScript:;">ff121</a></span>
        <a href="javaScript:;" class="a-btn"><i class="iconfont ic-left">&#xe64b;</i>Sing out</a>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="content"></router-view>
    </transition>
  </main>
</template>

<script>
  /******************/
  /******************/
  //region    //import

  //endregion

  /******************/
  /******************/
  //region    //initialize


  //endregion

  /******************/
  /******************/
  //region    //export

  export default {
    data() {
      return {}
    },
    mounted,
    methods: {},

  }
  //endregion

  /******************/
  /******************/
  //region    //function

  /**
   *组件挂载成功执行函数
   */
  function mounted() {

  }

  //endregion

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .header {
    height: 48px;
    line-height: 48px;
  }

  .user {
    padding: 0 15px;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
  }

  .a-btn {
    font-weight: 600;
    font-size: 18px;
    margin-right: 15px;
    &:hover {
      color: #409eff;
    }
  }

  .ic-left {
    display: inline-block;
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    -moz-transform: rotate3d(0, 0, 1, 180deg);
    -ms-transform: rotate3d(0, 0, 1, 180deg);
    -o-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
</style>
