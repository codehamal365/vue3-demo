// 引入defineStore用于创建store
import { defineStore } from 'pinia'
import { ref, computed } from "vue";

// 定义并暴露一个store
export const useUserStore = defineStore('user', () => {
    const name = ref("zs")


    const computedName = computed(() => name.value + "computed");

    const changeName = () => {
        name.value = 'lisi'
    }
    return { name, computedName, changeName }
})