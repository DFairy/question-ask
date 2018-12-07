import * as type from './mutation-types'

export const addNum = function({ commit, state }, id) {
    //点击下一题，记录答案id，判断是否最后一题，如果不是则跳转下一题
    commit(type.REMBER_ANSWER, id)
    if (state.itemNum < state.itemDetail.length) {
        commit(type.ADD_ITEMNUM, 1)
    }
}

//初始化信息
export const initializeData = function({ commit }) {
    commit(type.INITIALIZE_DATA)
}