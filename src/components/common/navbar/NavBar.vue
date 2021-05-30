<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavBar',
    data () {
    return {
    }
    }
}
</script>

<style  scoped>
    .nav-bar{
        display: flex;
        position: fixed;
        right: 0;
        top: 0;
        left: 0;
        height: 44px;
        box-shadow: 0 2px 4px rgba(237, 237, 237, 0.55);
        padding: 0;
    }
    .left .right{
        width: 60px; 
        height: 44px;
        
    }
    .center{
        flex: 1;
        text-align: center;
        line-height: 44px;
    }
</style>
