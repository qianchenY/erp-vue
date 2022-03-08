<template>
    <el-container>
        <el-header>
            <div class="g-header">
                <p class="m-header-title">
                    <span>ERP管理系统</span>
                </p>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <aside-menu></aside-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AsideMenu from '../components/AsideMenu.vue'
export default {
    name: 'AppContainer',
    components: {
        AsideMenu
    }
}
</script>

<style>
    color{
        color:red;
    }
</style>