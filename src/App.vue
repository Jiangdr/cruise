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
    color: #333;
    /*-webkit-font-smoothing: antialiased;*/
  }

  .iconfont {
    font-family: iconfont;
    font-style: normal;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 643650 */
    src: url('./assets/font/iconfont.eot');
    src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/font/iconfont.woff') format('woff'),
    url('./assets/font/iconfont.ttf') format('truetype'),
    url('./assets/font/iconfont.svg') format('svg');
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
      border: none;
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
    cursor: pointer;
    &:hover, &.active {
      background: #eee;
    }
    &:active {
      background: #ddd;
    }
  }

</style>
