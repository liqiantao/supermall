<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key='index' @click='addClick(index)'>
      <span :class="{active:currentIndex===index}">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    addClick(index){
      this.currentIndex = index;
      this.$emit('childClick',index);
    }

  }
}
</script>

<style>
.tab-control{
  display:flex;
  text-align: center;
  position: sticky;
  top: 0px;
  background-color: #fff;
  z-index: 9;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.active{
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>
