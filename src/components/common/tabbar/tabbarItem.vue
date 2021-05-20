<template>
<!-- 使用插槽 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" ><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    //传入当前点击组件的路径
    path:String,
    // 让用户传入颜色，默认为red
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
    }
  },
  methods:{
    // 当用户点击后切换页面
    itemClick(){
      this.$router.replace(this.path).catch(err=>{});
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {};
    }
  }
}

</script>

<style>

</style>
