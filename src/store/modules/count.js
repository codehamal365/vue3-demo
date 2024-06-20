// 引入defineStore用于创建store
import { defineStore } from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count', {
    // 动作
    actions: {
        // action {} 里面加入下面的方法
        increment(value) {
            //操作countStore中的sum
            this.count += value
        },
        //减
        decrement(value) {
            this.count -= value
        }
    },
    // 状态
    state() {
        return {
            count: 6
        }
    },
    // 计算
    getters: {
        doubleCount: (state) => state.count * 2,
        tripleCount() {
            return this.count * 3
        }
    }
})