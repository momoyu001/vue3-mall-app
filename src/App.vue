<template>
    <router-view class="router-view" v-slot="{ Component }">
        <transition :name="transitionName">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive, toRefs } from 'vue';

export default {
    name: 'App',
    setup() {
        const router = useRouter();
        const state = reactive({
            transitionName: 'silde-left',
        });

        // 全局导航钩子 beforeEach
        router.beforeEach((to, from) => {
            if (to.meta.index > from.meta.index) {
                // 下一级，向左滑动
                state.transitionName = 'slide-left';
            } else if (to.meta.index < from.meta.index) {
                // 上一级，向右滑动
                state.transitionName = 'slide-right';
            } else {
                // 同级，无过渡效果
                state.transitionName = '';
            }
        });

        return {
            ...toRefs(state),
        };
    },
};
</script>

<style lang="less">
html,
body {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}
#app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

.router-view {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    height: 100%;
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
    z-index: 1000;
}
</style>
