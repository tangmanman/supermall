<template>
  <div id="home">
    <nav-bar class="nav-bar"><h2 slot="center">首页</h2></nav-bar>
    <home-swiper :banners="banners" class="home-swiper"></home-swiper>
    <recommend-viwe :recommends="recommends"></recommend-viwe>
    <feature-viwe></feature-viwe>
    <tab-control :title="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from '../../network/home'
import RecommendViwe from './childComps/RecommendViwe'
import FeatureViwe from './childComps/FeatureViwe.vue'
import TabControl from '../../components/content/TabControl'

export default {
  components: { 
    NavBar,
    HomeSwiper,
    RecommendViwe,
    FeatureViwe,
    TabControl
    },
    data () {
    return {
      banners:[],
      recommends:[]
    }
    },
    created(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
        
      })
    },
    name:'Home',
    
}
</script>

<style  scoped>
  /* body{
    background-color:red;
  } */
  #home{
    background-color:#F5F5F6;
    /* height:100vh; */
    overflow-y: scroll;
  }
  .home-swiper{
    margin-top: 44px;
  }
  .nav-bar{
        background-color:#1CA6FF;
        z-index:9;
  }
  #home h2{
    color: #fff;
    font-size: 19px;
    font-weight: 500;
  }
  .recommend-viwe{
    background-color: #fff;
    margin: 0;
  }
 
  
</style>
