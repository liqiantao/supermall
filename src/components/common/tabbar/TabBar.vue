<template>
<!-- 套tabbleItem -->
  <div class="tab-barflex">
      <slot></slot>
  </div>
</template>

<script>

export default {
  name:'TabBar',
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
