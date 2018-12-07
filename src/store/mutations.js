import * as type from './mutation-types'
const mutations = {
    //点击进入下一题
    [type.ADD_ITEMNUM](state, num) {
        state.itemNum += num
    },
    //记录答案
    [type.REMBER_ANSWER](state, id) {
        state.answerid.push(id)
    },
    //记录做题时间
    [type.REMBER_TIME](state) {
        state.timer = setInterval(() => {
            state.allTime++
        }, 1000)
    },
    //初始化信息
    [type.INITIALIZE_DATA](state) {
        state.itemNum = 1
        state.allTime = 0
        state.answerid = []
    }
}
export default mutations