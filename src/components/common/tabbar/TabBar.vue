<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'TabBar',
    data () {
    return {
    }
    }
}
</script>
    
<style  scoped>
    #tab-bar{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 49px;
        box-shadow: 0 -4px 8px rgba(237, 237, 237, 0.8);
    }
</style>