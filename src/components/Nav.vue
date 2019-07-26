<template>
<div class="nav">
    <ul ref="ul">
        <li>主页</li>
        <li>照片</li>
        <li>动漫世界</li>
    </ul>
    <span class="back" @click="backTo()">退</span>
</div>
</template>

<script>
export default{
    props: {
        list: Array
    },
    mounted() {
    },
    methods: {
        backTo () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
@import '../style/Default_theme.less';
.nav{
   line-height: 2.2em;
   background:  @page-background;
   position: relative;
   color: @color;
   ul{
       display: inline-block;
       list-style-type: none;
       position: relative;
       top: 0;
       left: 0;
       li{
           display: inline-block;
           padding: 10px 20px;
           cursor: pointer;
           &:hover{
               background:  @hover-background;
           }
       }
   }
   .back{
       padding: 5px 15px;
       border-radius: 50%;
       color: @color;
       position: absolute;
       background: @box-background;
       top: 50%;
       right: 5px;
       transform: translateY(-50%);
       cursor: pointer;
   }
}
</style>
