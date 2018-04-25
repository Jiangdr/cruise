<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  $borer: #303133;

  html, body {
    font-family: arial, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 16px;
    /*-webkit-font-smoothing: antialiased;*/
  }

  div.el-loading-mask {
    z-index: 1990;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  /*reset css*/
  * {
    &, &:before, &:after {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
      outline: none;
    }
  }

  ul, li {
    list-style: none;
  }

  a {
    color: #333;
  }

  /*清除浮动*/
  .clearFix:before, .clearFix:after {
    content: "";
    display: table;
  }

  .clearFix:after {
    clear: both;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .btn-wrap {
    .button {
      & + .button {
        margin-left: 15px;
      }
    }
  }

  .button {
    padding: 4px 10px;
    line-height: 1;
    border-radius: 17px;
    background: #aaa;
    border: 1px solid $borer;
    &:hover, &.active {
      background: #eee;
    }
  }

</style>
