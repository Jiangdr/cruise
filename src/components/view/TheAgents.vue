<template>
  <section class="agent">
    <div class="sizer">
      <h6 class="fl">Agents</h6>
      <div class="btn-wrap fl">
        <button
          v-for="(btn, idx) in ['All', 'Physical', 'Virtual']"
          :key="idx"
          class="button"
          @click="type = idx"
          :class="{active: type === idx}">{{btn}}
        </button>
      </div>
    </div>
    <div class="wraper">
      <ul class="lists">
        <li
          v-for="li in cp_agent"
          :key="li.id"
          :class="{physical: li.type === 'physical'}"
          class="list">
          <div class="img">
            <div><img :src="li.img" alt="404"></div>
          </div>
          <div class="li-cont">
            <div class="clearFix">
              <span class="tag">{{li.name}}</span>
              <span class="tag">{{li.tag}}</span>
              <span class="tag">{{li.host}}</span>
              <span class="tag">{{li.path}}</span>
            </div>
            <div class="clearFix res">
              <a href="javaScript:;" class="btn tag"><i></i>Specify Resources</a>
              <ul class="res-ul">
                <li
                  class="res-item fl"
                  v-for="sp in li.resources"
                  :key="sp.id">{{sp.label}}
                  <i>+</i>
                </li>
              </ul>
            </div>
          </div>
          <div class="author"><p>{{li.author}}</p></div>
          <div class="dialog">
            <span class="arrows"></span>
            <p>111111111111</p>
            <input type="text">
            <button class="button">Add</button>
            <button class="button">Close</button>
          </div>
        </li>
      </ul>
      <div class="aside-msg"></div>
    </div>
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
        agent: [
          {
            id: $randomId(15),
            name: 'aaa',
            img: '',
            tag: 'building',
            host: '0.0.0.0',
            path: '/a/a/a',
            author: 'derry',
            type: 'physical',
            resources: [
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
            ],
          },
          {
            id: $randomId(15),
            name: 'aaa',
            img: '',
            tag: 'building',
            host: '0.0.0.0',
            path: '/a/a/a',
            author: 'derry',
            type: 'virtual',
            resources: [
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
              {
                id: $randomId(16),
                label: 'aaa',
              },
              {
                id: $randomId(16),
                label: '242424',
              },
            ],
          },
        ],
        type: 0,
      }
    },
    mounted,
    methods: {},
    computed: {
      cp_agent() {
        let base = {
          0: 'all',
          1: 'physical',
          2: 'virtual',
        }, type = base[this.type];
        console.log(base);
        return this.agent.filter(itm => (itm.type === type || type === 'all'))
      },
    },
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

  /**
   * 随机生成id
   * @param n 默认32位
   * @returns {string}
   */
  function $randomId(n = 32) {
    let s = '';
    Array.from({length: n}).forEach((v, i) => {
      let r = Math.floor(Math.random() * 36);
      if (r < 10) {
        s += r;
      } else {
        s += String.fromCharCode(r + 87);
      }
      if ([7, 11, 15, 19].includes(i)) s += '-';
    })
    return s
  }

  //endregion

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  $select: #606266;
  $borer: #303133;

  .agent {

  }

  .sizer {
    background: $select;
    border: 3px solid $borer;
    height: 50px;
    color: #aaa;
    line-height: 50px;
    padding: 0 20px;
    h6 {
      font-size: 1.25rem;
      margin-right: 20px;
    }
    .button {
      width: 70px;
    }
  }

  .wraper {
    border: 3px solid $borer {
      top-color: transparent;
    }
    position: relative;
    top: -3px;
    display: flex;
    width: 100%;
  }

  .lists {
    border-right: 2px solid $borer;
    padding: 20px;
    flex: 1 1 auto;
  }

  .list {
    background: #cce8b5;
    border: 2px solid $select;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    animation: slide .2s ease-in-out forwards;
    transform-origin: top;
    position: relative;
    &.physical {
      background: #fffbb9;
    }
    & + .list {
      margin-top: 20px;
    }
    .img {
      width: 50px;
      overflow: hidden;
      display: flex;
      align-items: center;
      div {
        width: 100%;
        height: 50px;
        background: $select;
        border-radius: 50%;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    .li-cont {
      line-height: 25px;
      padding: 0 10px;
      width: calc(100% - 110px);
      .tag {
        font-weight: 600;
        padding: 0 15px;
        border-right: 1px solid $select;
        &:last-of-type {
          border-right: none;
        }
      }

      .tag.btn {
        font-weight: 300;
        white-space: nowrap;
        border-right: 1px solid $select;
        &:hover {
          color: #409EFF;
        }
      }
    }

    .res {
      display: flex;
    }

    .res-item {
      padding: 0 15px;
    }

    .author {
      position: relative;
      width: 80px;
      line-height: 25px;
      p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .dialog {
      position: absolute;
    }
  }

  .aside-msg {
    width: 280px;
    height: 500px;
    padding: 20px;
  }

  @keyframes slide {
    $trans: scale3d(1, 1.1, 1);
    $trans-end: scale3d(1, 1, 1);
    from {
      -webkit-transform: $trans;
      -moz-transform: $trans;
      -ms-transform: $trans;
      -o-transform: $trans;
      transform: $trans;
    }
    to {
      -webkit-transform: $trans-end;
      -moz-transform: $trans-end;
      -ms-transform: $trans-end;
      -o-transform: $trans-end;
      transform: $trans-end;
    }
  }
</style>
