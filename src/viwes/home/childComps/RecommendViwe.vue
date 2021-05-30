<template>
  <div id="recommend-viwe">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>
 
<script>
export default {
    name:'RecommendViwe',
    props:{
        recommends:{
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
    #recommend-viwe{
        display: flex;
        background-color: #fff;
        padding: 10px 8px;

    }
    #recommend-viwe a{
       font-size:0
    }
    .recommend-item{
        flex: 1;
        text-align:center;
        background-color: #fff;
    }
    .recommend-item img{
        width: 70px;
        display:block;
        background-color: #fff;
    }
    .recommend-item a{
        font-family: Helvetica;
        color:#1F2020;
        font-weight:500;
        font-size: 13px;
        line-height: 18px;
    }
</style>
