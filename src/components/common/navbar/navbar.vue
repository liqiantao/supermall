<template>
  <div class="navbar-item">
    <div class="left">
      <slot name='left'></slot>
    </div>
    <div class="center">
      <slot name='center'></slot>
    </div>
    <div class="right">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style>
.navbar-item {
    display: flex;
    height: 44px;
    line-height: 44px;
    vertical-align: middle;
    z-index: 9999;
}

.left .right {
    width: 60px;
}

.center {
    flex: 1;
    text-align: center;
}

.center p {
    margin: 0;
}

:root {
    --color-tint: #ff8198;
}

</style>
