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
      transitionName: 'silde-left'
    })

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
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
