<template>
<!-- 使用插槽 -->
  <div class="tab-bar-item" @click="ItemClick">
    <div>
      <slot v-if="!active" name='item-icon'></slot>
      <slot v-else name='item-icon-active'></slot>
    </div>
    <div :style="TabBarActive">
      <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      flag:false
    }
  },
  methods:{
    // 当用户点击后切换页面
    ItemClick(){
      this.$router.replace(this.path).catch(err=>{});
    },
  },
  computed:{
    active(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    TabBarActive(){
      return this.active?"color:"+this.activeColor:'';
    }
  }
}

</script>

<style>

</style>
