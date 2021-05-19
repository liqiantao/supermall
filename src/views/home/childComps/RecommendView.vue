<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
        <img :src="item.image" alt="" srcset="">
        <p>{{item.title}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:['recommends']
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 12px;
  border-bottom: 7px solid #eee;
}
.recommend-item{
  flex: 1;
  width: 50%;
  margin: 6px;
}
.recommend div img{
  width: 100%;
}
.recommend div p{
  margin: 5px;
}
</style>
