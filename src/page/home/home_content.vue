<template>
    <div class="home">
        <div class="content">
            <router-view></router-view>
            <!--用户信息开始-->
            <div class="content-right">
                <div class="user-info hover-shadow">
                    <!-- <img src="../../assets/image/bg-cat.jpg" /> -->
                </div>
                <div class="recommend hover-box-shadow">
                    <ul class="label-type">
                        <li v-for="reco in Recommend">{{reco}}</li>
                    </ul>
                </div>
            </div>
            <!--用户信息结束-->
            <!--内容区开始-->
            <div class="content-area hover-shadow" v-for="(item, key) in content" :key="key" @click="toContent(item)">
                <h1>{{item.title}}</h1>
                <ul class="list-label label-type">
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
export default{
    data() {
        return {
            activeIndex: '1',
            navList: ['主页', '照片', '设置'],
            Recommend: ['动漫', '妖精的尾巴', 'JOJO的奇妙冒险', '平成废物'],
            content: [
                {
                    title: '美好的一天',
                    label: ['一缕阳光', '清晨阳光', '禅'],
                    describe: '美好的一天从这里开始',
                    image: ''
                },
                {
                    title: '塔罗会降临',
                    label: ['乌贼', '诡秘之主', '克罗恩', '愚者', '正义'],
                    describe: '......',
                    image: ''
                }
            ]
        }
    },
    components: {
    },
    methods: {
        toContent (val) {
            console.log(val)
            this.$router.push({name: 'home_details'})
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../style/hover-shadow.less';
.home{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .BGimg{
        // background: url("../../assets/image/bg-cat.jpg") no-repeat;
        background: rgba(221, 221, 221, 0.5);
        background-size: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index: -99;
        // filter: blur(2px);
        // overflow: hidden;
        background-position: center center;
        // background-size: 125% 125%;
    }
    .head-nav{
        padding: 10px;
        position: fixed;
        top: 0px;
        width: 100%;
        text-align: center;
        box-shadow: 0 1px 2px 2px rgba(37, 37, 37, 0.2);
        z-index: 99;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center;
        background:  rgba(221, 221, 221, 1);
        ul{
            list-style-type: none;
            overflow: hidden;
            li{
                float: left;
                padding: 10px 20px;
                cursor: pointer;
            }
        }
    }
    .content{
        width: 80%;
        min-height: 600px;
        margin: 150px auto 0;
        // overflow: hidden;
        // border: 1px red solid;
    }
    .content-area{
        width: 70%;
        margin:  0 0 30px 0;
        float: left;
        text-align: left;
        h1{
            line-height: 2.2em;
        }
        h2{
            line-height: 2em;
        }
        span{
            line-height: 1.5em;
        }
        .list-label{
            &>li{
                display: inline-block;
                padding: 5px;
                margin: 0 5px 0 5px;
            }
        }
    }
    .content-right{
        width: 25%;
        float: right;
        // overflow: hidden;
        &>div{
            margin: 0 0 10px 0;
        }
        .user-info{
            // margin: 0 0 10px 0;
            img{
                width: 100%;
            }
        }
        .recommend{
            ul{
                padding: 10px 0 10px 0;
                text-align: left;
                li{
                    padding: 0px 5px;
                    margin-bottom: 5px;
                    border-width: 0px;
                    transition: border-left-width .2s;
                    -moz-transition: border-left-width .2s;	/* Firefox 4 */
                    -webkit-transition: border-left-width .2s;	/* Safari 和 Chrome */
                    -o-transition: border-left-width .2s;	/* Opera */
                    &:hover{
                        border-left-width: 3px;
                    }
                }
            }
        }
    }
}
</style>
