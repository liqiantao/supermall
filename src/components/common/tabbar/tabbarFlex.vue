<template>
<!-- 套tabbleItem -->
  <div class="tab-barflex">
      <tab-bar-item path="/home">
        <img src="~assets/images/tabbar/home.svg" slot='item-icon'>
        <img src="~assets/images/tabbar/home_active.svg" slot='item-icon-active'>
        <p slot="item-text">首页</p>
      </tab-bar-item>

    <tab-bar-item path='/category'>
      <img src="~assets/images/tabbar/category.svg" slot='item-icon'>
      <img src="~assets/images/tabbar/category_active.svg" slot='item-icon-active'>
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/images/tabbar/shopcart.svg" slot='item-icon'>
      <img src="~assets/images/tabbar/shopcart_active.svg" slot='item-icon-active'>
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/images/tabbar/profile.svg" slot='item-icon'>
      <img src="~assets/images/tabbar/profile_active.svg" slot='item-icon-active'>
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './tabbarItem'
export default {
  name:'tabbarFlex',
  components:{
    TabBarItem
  }
}
</script>

<style>
.tab-barflex {
    position: fixed;
    display: flex;
    bottom: 0px;
    left: 0;
    width: 100%;
    border-top: 1px solid rgb(226, 226, 226);
    box-shadow: -1px -1px -1px rgb(228, 228, 228);
    height: 49px;
    background-color: rgb(250, 250, 250);
    z-index: 9;
}

.tab-bar-item {
    text-align: center;
    font-size: 14px;
    flex: 1;
}

.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
}

.tab-bar-item p {
    margin: 0;
}

</style>
