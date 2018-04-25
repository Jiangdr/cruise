<template>
  <section class="tabs clearFix">
    <div class="logo fl"></div>
    <ul class="fr tab-ul">
      <li
        v-for="(li, idx) in lis"
        :key="li.label"
        @click="info.select = idx"
        class="li-item fl"
        :class="{selected: info.select === idx}">{{li.label}}
      </li>
    </ul>
  </section>
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
      return {
        lis: [
          {
            label: 'DASHBOARD',
          },
          {
            label: 'MY CRUISE',
          },
          {
            label: 'AGENTS',
          },
          {
            label: 'HELP',
          },
        ],
      }
    },
    props: {
      info: {
        type: Object,
        required: true,
      },
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
  $borer: #303133;
  $select: #606266;
  $trans: all .15s ease-in;

  .tabs {
    border-bottom: 3px solid $borer;
  }

  .tab-ul {
    position: relative;
    z-index: 1;
    bottom: -3px;
    overflow: hidden;
  }

  .li-item {
    border: 3px solid $borer {
      bottom-color: transparent;
      top-left-radius: 12px;
      top-right-radius: 12px;
    }
    cursor: pointer;
    padding: 5px 10px;
    -webkit-transition: $trans;
    -moz-transition: $trans;
    -ms-transition: $trans;
    -o-transition: $trans;
    transition: $trans;
    position: relative;
    top: 7px;
    & + .li-item {
      margin-left: 8px;
    }
    &.selected, &:hover {
      background: $select;
      color: #eee;
      transform-origin: bottom;
      padding-top: 10px;
      top: 2px;
    }
  }
</style>
