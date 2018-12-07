<template>
    <transition name='toast'>
        <div class='toast' v-if='toast'>
            <div class='toast_main' >{{message}}</div>
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            required: true
        },
        toast:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss">
// 效果一
// .toast-enter-active,.toast-leave-active{
//   transition: all 1s;
// }
// .toast-enter, .toast-leave-to{
//   opacity: 0;
//   transform: translateY(30px)
// }

// 效果二
// .toast-enter-active{
//     animation: fade 1s ;
// }
// .toast-leave-active{
//     animation: fade 1s reverse;
// }
// @keyframes fade{
//     0%{
//         transform:scale(0);
//     }
//     50%{
//         transform:scale(1.1);
//     }
//     100%{
//         transform:scale(1);
//     }
// }

//效果三
.toast-enter-active{
  animation: fade 0.5s ;
}
@keyframes fade{
    0%{
        transform: translateY(-8px)
    }
    25%{
        transform: translateY(8px)
    }
    50%{
        transform: translateY(-6px)
    }
    75%{
        transform: translateY(6px)
    }
    100%{
        transform: translateY(0px)
    }
}

.toast{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .toast_main{
        width: auto;
        padding: 0.6rem;
        padding-top:0.8rem;
        padding-bottom: 0.8rem; 
        background-color: rgba(37,38,45,.9);
        color: #fff;
        opacity: 0.9;
    }
}
</style>
