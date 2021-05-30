<template>
  <div class="tab-control">
      <div v-for="item in title" class="tab-control-item">{{item}}</div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
    return {
    }
    }
}
</script>

<style  scoped>
    .tab-control{
        display: flex;
        background-color: #fff;
        height: 44px;
        margin-bottom:94px
    }
    .tab-control-item{
        margin: 0;
        flex: 1;
        text-align: center;
        line-height: 44px;
    }
</style>
