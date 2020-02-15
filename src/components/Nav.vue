<template>
<div class="nav">
    <ul ref="ul">
        <li>主页</li>
        <li>照片</li>
        <li>动漫世界</li>
    </ul>
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
}
</style>
