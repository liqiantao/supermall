<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-navbar"><p slot="center">购物街</p></nav-bar>
    <!-- 插槽引用时，给予content，css样式不叠加， 插槽里的自适应-->
    <scroll class="content" ref="scroll" @ReachBottom="ReachBottom">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" @childClick="childClick"></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <reach-top @click.native="TopClick"></reach-top>
  </div>
</template>

<script>
import { getHomeMultidata,getHomeGoods } from 'network/home'

import GoodsList from 'components/content/goods/GoodsList.vue'
import ReachTop from '../../components/common/ReachTop/ReachTop.vue'
const TabControl =()=> import('components/content/TabControl/TabControl')

const NavBar = ()=> import('components/common/navbar/navbar')
const Scroll = () => import('components/common/betterScroll/betterScroll.vue')

const HomeSwiper = () => import('./childComps/HomeSwiper.vue')
const RecommendView = () => import('./childComps/RecommendView.vue')
const FeatureView = () => import('./childComps/FeatureView.vue')

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    ReachTop,
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        //page每增1等于30条数据
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentgoods:'pop'
    }
  },
  created(){
    //请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed:{
    showgoods(){
      return this.goods[this.currentgoods].list
    }
  },
  methods:{

    /**
     * 事件监听的方法
     */
    childClick(index){
      switch(true){
        case index==0:{
          this.currentgoods='pop'
          break;
        }
        case index==1:{
          this.currentgoods='new'
          break;
        }
        case index==2:{
          this.currentgoods='sell'
          break;
        }
      }
    },
    //为了生命周期函数看着优雅，把它抽到方法中
    /*
      网络请求相关的
    */
    getHomeMultidata(){
        getHomeMultidata().then(res =>{
          // 存入轮播图数据
          this.banners = res.data.banner.list;
          // 存入推荐位数据
          this.recommends = res.data.recommend.list;
          return res;
        },err =>{
          return err;
        }
      )
    },
    getHomeGoods(type){
        //每次成功获取数据page加一
        const page = this.goods[type].page += 1;
        // console.log(page);
      getHomeGoods(type,page).then(res=>{
        //把每次获得数据压入数组中
        console.log(this.goods[type]);
        this.goods[type].list.push(...res.data.list);
      },error=>{
        console.log(error);
      })
    },
    //划动到底部后触发
    ReachBottom(){
      this.getHomeGoods(this.currentgoods);
    },
    TopClick(){
      // 利用ref获取子组件的函数并调用
      this.$refs.scroll.TopClick(0,0);
    }
  }
}
</script>

<style scoped>
#home {
    height: 100vh;
    position: relative;
  }
.home-navbar{
  background-color: var(--color-tint);
  color:#fff;
}
.content {
    overflow: hidden;
    height: calc(100vh - 93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
