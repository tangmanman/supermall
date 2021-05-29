<template>
  <div id="App">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#1CA6FF">
        <template v-slot:item-icon><img src="./assets/img/tabbar/home.png"></template>
        <template v-slot:item-icon-active><img src="./assets/img/tabbar/home_active.png"></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#1CA6FF">
        <template v-slot:item-icon><img src="./assets/img/tabbar/category.png"></template>
        <template v-slot:item-icon-active><img src="./assets/img/tabbar/category_active.png"></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#1CA6FF">
        <template v-slot:item-icon><img src="./assets/img/tabbar/cart.png"></template>
        <template v-slot:item-icon-active><img src="./assets/img/tabbar/cart_active.png"></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#1CA6FF">
        <template v-slot:item-icon><img src="./assets/img/tabbar/profile.png"></template>
        <template v-slot:item-icon-active><img src="./assets/img/tabbar/profile_active.png"></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/tabbar/TabBar.vue'
import TabBarItem from './components/common/tabbar/TabBarItem.vue'


export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
    
  }
}
</script>

<style>
  @import "./assets/css/base.css"

</style>
