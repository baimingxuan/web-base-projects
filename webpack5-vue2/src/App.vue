<template>
    <div class="container">
        <h3>{{initData}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            initData: 'webpack5-vue2测试运行环境!'
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: brown;
}
</style>