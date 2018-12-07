<template>
<div class="dialog">
    <div class="dialog_cover" v-show='dialog'></div>
    <transition name="fade">
        <div class="dialog_content" v-show='dialog'>
            <div class='dialog_head'>提示</div>
            <div class='dialog_main'>{{message}}</div>
            <div class='dialog_foot'>
                <div @click='hide'><span>取消</span></div>
                <div @click='hide'><span>确认</span></div>
            </div>
        </div>
    </transition>
</div> 
</template>

<script>
export default {
    // data(){
    //     return{
    //         hide:this.dialog
    //     }
    // },
    props:{
        dialog:{
            type:Boolean,
            default:false
        },
        message:{
            type:String,
            default:""
        }
    },
    methods:{
        hide(){
            this.$emit('hide',null)
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog{
    font-size: 0.8rem; 
    width: 100%;
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // color: rgb(51,51,51);
    .dialog_cover {
        background: rgba(0,0,0, 0.5);
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    @keyframes move{
        0%{
            transform: scale(0)
        }
        50%{
            transform: scale(1.1)
        }
        100%{
            transform: scale(1)
        }
    }
    .fade-enter-active {
        animation: move 0.5s;
    }
    .fade-leave-active {
        animation: move .5s reverse;
    }
    .dialog_content{
        width:80%;
        height: 6rem;
        z-index: 300;
        background: #fff;
        border-radius: 10px;
        position: fixed;
        top:50%;
        left: 50%;
        margin-left:-40%;
        margin-top: -3rem;
        opacity: 0.9;
        text-align: center;
    }
    .dialog_head{
        // border-bottom:1px solid #ccc;
        padding: 0.2rem;
        color: black;
        font-size: 0.9rem;
        font-weight: bold;
    }
    .dialog_main{
        padding-top:0.5rem; 
    }
    .dialog_foot{
        width: 100%;
        position: absolute;
        bottom: 0;
        border-top:1px solid #ccc; 
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        // padding: 0.5rem;
        div{
            flex: 1;
            padding: 0.3rem;
        }
        div:first-child{
            border-right:1px solid #ccc;
            span{
                color: blue
            } 
        }
        div:last-child{
            span{
                color: red
            } 
        }
    }
}


</style>

