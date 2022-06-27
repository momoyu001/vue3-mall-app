<template>
    <div class="home-module">
        <header class="home-header wrap" :class="{ active: headerScroll }">
            <router-link to="./category">
                <i class="nbicon nbmenu2"></i>
            </router-link>
            <div class="header-search">
                <span class="app-name">新峰商城</span>
                <i class="iconfont icon-search"></i>
                <router-link class="search-title" to="./product-list">
                    <span>山河无恙，人间皆安</span>
                </router-link>
            </div>
            <router-link class="login" to="./login" v-if="!isLogin">登录</router-link>
            <router-link class="login" to="./user" v-else>
                <van-icon name="manager-o"></van-icon>
            </router-link>
        </header>
        <NavBar />
        <Swiper :list="swiperList.data"></Swiper>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';
import Swiper from '../components/Swiper.vue';
import { getHome } from '@/service/home';
import { getLocal } from '@/common/js/utils';
import { Toast } from 'vant'

// import { useRouter } from 'vue-router';

// const router = useRouter();

let headerScroll = ref(false); // 滚动透明判断
let isLogin = ref(false); // 是否已登录
let swiperList = reactive({
    data: []
})

onMounted(async () => {
    const token = getLocal('token');
    if (token) {
        isLogin = true;
    }

    Toast.loading({
        message: '加载中...',
        forbidClick: true
    });

    const { data } = await getHome();
    swiperList.data = data.carousels;
    Toast.clear()
})
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.home-header {
    position: fixed;
    left: 0;
    top: 0;
    .wh(100%, 50px);
    .fj();
    line-height: 50px;
    padding: 0 15px;
    .boxSizing();
    font-size: 15px;
    color: #fff;
    z-index: 10000;
    .nbmenu2 {
        color: @primary;
        font-size: 16px;
        &::before {
            content: '\e609';
        }
    }
    &.active {
        background: @primary;
        .nbmenu2 {
            color: #fff;
        }
        .login {
            color: #fff;
        }
    }

    .header-search {
        display: flex;
        .wh(74%, 20px);
        line-height: 20px;
        margin: 10px 0;
        padding: 5px 0;
        color: #232326;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        .app-name {
            padding: 0 10px;
            color: @primary;
            font-size: 20px;
            font-weight: bold;
            border-right: 1px solid #666;
        }
        .icon-search {
            padding: 0 10px;
            font-size: 17px;
        }
        .search-title {
            font-size: 12px;
            color: #666;
            line-height: 21px;
        }
    }

    .icon-iconyonghu {
        color: #fff;
        font-size: 22px;
    }
    .login {
        color: @primary;
        line-height: 52px;
        .van-icon-manager-o {
            font-size: 20px;
            vertical-align: -3px;
        }
    }
}
</style>
