<template>
    <div>
        <navmenu :list="['头部']"></navmenu>
        <router-view></router-view>
    </div>
</template>
<script>
import navmenu from '../../components/Nav'
export default {
    components: {
        navmenu
    }
}
</script>

<style lang="less" scoped>
p{
    color: red;
}
</style>
