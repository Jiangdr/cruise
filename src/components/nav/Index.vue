<template>
  <main class="container">
    <header class="header clearFix">
      <div class="fr user">
        <span><span>Signed in as</span><a href="javaScript:;">ff121</a></span>
        <span><i>--</i>Sing out</span>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view  class="content"></router-view>
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

  .content {
    width: 1200px;
    margin: 0 auto;
  }
</style>
