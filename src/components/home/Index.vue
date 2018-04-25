<template>
  <main>
    <the-tabs
      :info="base"></the-tabs>
    <transition name="fade" mode="out-in">
      <keep-alive exclude="base-result">
        <component
          is="the-agents"
          class='location'></component>
      </keep-alive>
    </transition>
  </main>
</template>

<script>
  /******************/
  /******************/
  //region    //import
  import compts from './index'
  import tabs from '../view'

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
      return {
        base: {
          select: 0
        },
      }
    },
    mounted,
    components: {...compts, ...tabs},
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

</style>
