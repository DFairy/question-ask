import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/home.vue'
import Item from 'views/item/item.vue'
import Score from 'views/score/score.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/item',
            component: Item
        },
        {
            path: '/score',
            component: Score
        },
    ]
})