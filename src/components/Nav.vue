<template>
<div class="nav">
    <ul ref="ul">
        <li v-for="item in list">{{item}}</li>
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
.nav{
   // margin: 0 auto;
   line-height: 2.2em;
   background:  rgba(221, 221, 221, 1);
   box-shadow: 0 1px 2px 2px rgba(37, 37, 37, 0.2);
   ul{
       display: inline-block;
       list-style-type: none;
       position: relative;
       top: 0;
       left: 0;
       li{
           display: inline-block;
           padding: 10px 20px;
           &:hover{
               background:  rgba(233, 144, 29, 0.5);
           }
       }
   }
   .back{
       padding: 5px 10px;
       border-radius: 50%;
       float: right;
       background: rgb(0, 203, 253);
   }
}
</style>
