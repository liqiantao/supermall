<template>
<!-- 在这里从新定义wrapper content，不对外面有任何影响 -->
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// 解决betterSrcoll 2.x版本不能划动的问题，需要引引它，并observeDOM: true
import ObserveDom from '@better-scroll/observe-dom'

export default {
  name:"Scroll",
  data(){
    return {
      mescroll: null,
    }
  },
  mounted(){
    this.mescroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      scrollbar: true,
      observeDOM: true,
      click:true
    }),
    this.mescroll.on('scroll',function(position){
      // console.log(position);
    })
    this.mescroll.on('pullingUp',()=>{
      // 当检测到上拉到底时请求数据
      this.$emit('ReachBottom');
      //每次触发 pullingUp钩子后，主动调用 finishPullUp() 告诉 BetterScroll 准备好下一次的 pullingUp 钩子。
      setTimeout(() => {
        // 防止请求过于频繁，2秒
        this.mescroll.finishPullUp();
      }, 2000);

    })
  },updated(){

  },
  components:{
  },
  methods:{
    //时间默认值5秒
    TopClick(x,y,time=500){
      this.mescroll.scrollTo(0,0,300)
    }
  }
}
</script>

<style scoped>
</style>
