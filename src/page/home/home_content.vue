<template>
  <div class="home">
    <div class="content">
      <router-view></router-view>
      <!--用户信息开始-->
      <div class="content-right">
        <div class="user-info">
          <img src="../../assets/Photo.jpg" />
        </div>
        <div class="recommend hover-shadow">
          <ul class="label-type de-ul">
            <li v-for="reco in Recommend">{{reco}}</li>
          </ul>
        </div>
      </div>
      <!--用户信息结束-->
      <!--内容区开始-->
      <div
        class="content-area hover-shadow"
        v-for="(item, key) in content"
        :key="key"
        @click="toContent(item)"
      >
        <h1>{{item.title}}</h1>
        <ul class="list-label label-type de-ul">
          <li v-for="child in item.label">#{{child}}</li>
        </ul>
        <h2>简介</h2>
        <span>{{item.describe}}</span>
        <img :src="item.image" v-if="item.image" />
      </div>
      <!--内容区结束-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      navList: ["主页", "照片", "设置"],
      Recommend: ["动漫", "妖精的尾巴", "JOJO的奇妙冒险", "平成废物"],
      content: [
        {
          title: "美好的一天",
          label: ["一缕阳光", "清晨阳光", "禅"],
          describe: "美好的一天从这里开始",
          image: ""
        },
        {
          title: "塔罗会降临",
          label: ["乌贼", "诡秘之主", "克罗恩", "愚者", "正义"],
          describe: "......",
          image: ""
        }
      ]
    };
  },
  components: {},
  methods: {
    toContent(val) {
      console.log(val);
      this.$router.push({ name: "home_details" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/hover-shadow.less";
@import "../../style/Default_theme.less";
@import "../../style/public_style.less";
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .content {
    width: 80%;
    min-height: 600px;
    margin: 150px auto 0;
  }
  .content-area {
    width: 70%;
    margin-bottom: 30px;
    padding: 5px;
    float: left;
    text-align: left;
    background: @page-background;
    h1 {
      line-height: 2.2em;
    }
    h2 {
      line-height: 2em;
    }
    span {
      line-height: 1.5em;
    }
    .list-label {
      & > li {
        display: inline-block;
      }
    }
  }
  .content-right {
    width: 25%;
    float: right;
    background: @page-background;
    & > div {
      margin: 0 0 10px 0;
    }
    .user-info {
      img {
        width: 100%;
      }
    }
    .recommend {
      // background: @box-background;
      color: @color;
      ul {
        text-align: left;
        padding-left: 0;
        li {
          border-color: rgba(107, 185, 240, 1);
          border-style: solid;
          border-width: 0px;
          cursor: pointer;
          transition: border-left-width 0.2s;
          -moz-transition: border-left-width 0.2s; /* Firefox 4 */
          -webkit-transition: border-left-width 0.2s; /* Safari 和 Chrome */
          -o-transition: border-left-width 0.2s; /* Opera */
          &:hover {
            border-left-width: 3px;
          }
        }
      }
    }
  }
}
</style>
