<template>
  <section class="agent">
    <div class="sizer">
      <h6 class="fl">Agents</h6>
      <div class="btn-wrap fl">
        <button
          type="button"
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
          v-for="(li, idx) in cp_agent"
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
              <a @click="show = idx; addStr = ''" href="javaScript:;" class="btn tag"><i>+</i>Specify Resources</a>
              <ul class="res-ul">
                <transition name="fade" mode="out-in">
                  <li
                    class="res-item fl" v-show="li.resources.length > 0">Resources:
                  </li>
                </transition>
                <transition
                  v-for="(sp, i) in li.resources"
                  :key="sp.id"
                  name="fade" mode="out-in">
                  <li
                    class="res-item fl btn"
                    @click="deleteRes(li, sp.id, i)">{{sp.label}}
                    <i class="iconfont">&#xe625;</i>
                  </li>
                </transition>
              </ul>
            </div>
          </div>
          <div class="author"><p>{{li.author}}</p></div>
          <transition name="fade" mode="out-in">
            <div class="dialog" v-show="show === idx">
              <span class="arrows"></span>
              <p>(separate multiple resources name with commas)</p>
              <input v-focus="show === idx" type="text" v-model="addStr">
              <div class="btn-wrap">
                <button type="button" class="button" @click="addResource(li)">Add resource</button>
                <button type="button" class="button" @click="show = -1">Close</button>
              </div>
            </div>
          </transition>
        </li>
      </ul>
      <div class="aside-msg">
        <h6 class="msg-title">Summary</h6>
        <ul class="msg-item">
          <li>
            <span class="hand">dev</span>
            <span>12</span>
          </li>
          <li>
            <span class="hand">building</span>
            <span>2</span>
          </li>
        </ul>
        <h6 class="msg-title">History</h6>
        <ul class="msg-item">
          <li>
            <span>bjstdmngber01</span>
            <span>add</span>
            <span>resources</span>
          </li>
          <li>
            <span>bjstdmngber01</span>
            <span>add</span>
            <span>resources</span>
          </li>
          <li>
            <span>bjstdmngber01</span>
            <span>add</span>
            <span>resources</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  /******************/
  /******************/
  //region    //import
  import axios from 'axios'
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
        agent: [],
        type: 0,
        show: -1,
        addStr: '',
      }
    },
    mounted,
    directives: {
      focus: {
        // 获取焦点指令
        update: function (el, p) {
          p.value && el.focus();
        },
      }
    },
    methods: {
      addResource(obj) {
        axios.post('http://127.0.0.1:8380/add', {
          id: obj.id,
          res: this.addStr,
        }).then(({data}) => {
          obj.resources.push(...data);
          this.show = -1;
        })

      },
      deleteRes(obj, id, idx) {
        axios.post('http://127.0.0.1:8380/delete', {
          pId: obj.id,
          id: id,
        }).then(({data}) => {
          obj.resources.splice(idx, 1)
        })
      },
    },
    computed: {
      cp_agent() {
        let base = {
          0: 'all',
          1: 'physical',
          2: 'virtual',
        }, type = base[this.type];
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
    axios.post('http://127.0.0.1:8380/agent', {id: 2}).then(({data}) => {
      this.agent = data;
    });
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
    border: 3px solid $borer {
      top-color: $select;
    }
    height: 50px;
    color: #ddd;
    line-height: 44px;
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
    top: -6px;
    display: flex;
    width: 100%;
  }

  .lists {
    border-right: 2px solid $borer;
    padding: 20px;
    flex-grow: 1;
    transform-style: preserve-3d;
  }

  .list {
    background: #cce8b5;
    border: 2px solid $select;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    /*animation: slide .2s ease-in-out forwards;*/
    /*transform-origin: top;*/
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
        /*        background: $select;*/
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
      &.btn {
        cursor: pointer;
        &:hover {
          color: #888;
        }
      }
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
      $border: #6e6e6e;
      $bg: #e0edd5;
      position: absolute;
      top: calc(100% + 15px);
      left: 30px;
      z-index: 3;
      background: $bg;
      border: 2px solid $border;
      padding: 10px;
      border-radius: 20px;

      input {
        width: 600px;
        box-shadow: 0 0 5px rgba(50, 50, 150, .3) inset;
        margin: 10px 0;
        border: 1px solid $borer;
        padding: 2px 20px;
      }

      .button {
        background: #eee;
        &:hover {
          background: #aaa;
        }
        &:active {
          background: #bbb;
        }
      }

      .arrows {
        display: block;
        position: absolute;
        bottom: 100%;
        left: 40px;
        width: 0;
        height: 0;
        border: 25px solid transparent {
          bottom-color: $border;
        }
        &:before {
          content: '';
          display: table;
          width: 0;
          height: 0;
          position: absolute;
          bottom: -25px;
          left: -22px;
          border: 22px solid transparent {
            bottom-color: $bg;
          }
        }
      }
    }
  }

  .aside-msg {
    width: 280px;
    min-width: 280px;
    padding: 20px;

    .msg-title {
      line-height: 35px;
      font-size: 18px;
      border-bottom: 2px solid #999;
    }

    .msg-item {
      line-height: 30px;
      padding: 0 5px;
    }

    .hand {
      display: inline-block;
      width: 100px;
    }
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

  .test {
    background: #a6a;
    position: relative;
  }

  .test-t {
    background: #633;
    position: relative;
  }
</style>
