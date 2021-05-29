<template>
    <div id="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'#616161'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
    activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
    }

    },
    methods:{
        itemClick(){
            return this.$router.replace(this.path)
        }
    },
    data () {
    return {
    }
    }
}
</script>

<style  scoped>
    #tab-bar-item{
        flex: 1;
        text-align: center;
        font-size: 13px;
    }
    #tab-bar-item img{
        width:25px;
        vertical-align: -webkit-baseline-middle;
        margin-top: 3px;
    }
</style>
