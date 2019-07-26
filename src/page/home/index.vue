<template>
    <div class="home">
        <navmenu></navmenu>
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
@import '../../style/Default_theme.less';
.home {
    height: 100%;
    background: @background;
}
</style>
