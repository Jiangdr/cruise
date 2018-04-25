<template>
  <div class="error">
    <img src="/static/imgs/error_06.png" alt="">
    <p class="msg">对不起，你访问的页面<span>失联</span>了</p>
  </div>
</template>

<script>
  export default {
    name: "TheError"
  }
</script>

<style scoped lang="scss">

  .error {
    margin: 0 auto;
    text-align: center;
    padding-top: 150px;
  }
  .msg {
    font-weight: 600;
    span {
      color: #ee8145;
    }
  }
</style>
