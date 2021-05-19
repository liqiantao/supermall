<template>
  <div class="wrapper">
    <ul class="content">
      <li>123</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>123</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>123</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>321</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name:'category',
  data(){
    return {

  }
  },
  mounted(){
    let wrapper = document.querySelector('.wrapper')
    let bs = new BetterScroll(wrapper, {
      movable: true,
      zoom: true
    })
  }
}
</script>

<style scoped>
  .wrapper{
    background-color: wheat;
    height: 300px;
  }
</style>
