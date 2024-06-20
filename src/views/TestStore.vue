<template>
    <h2>当前count为：{{ countStore.count }}</h2>
    <h2>当前 storeToRefs count为：{{ count }}</h2>


    <h2>当前 double count为：{{ doubleCount }}</h2>
    <h2>当前 triple count为：{{ tripleCount }}</h2>

    <div>
        <button @click="changeCount">change count</button>
    </div>
</template>

<script setup name="Count">
// 引入对应的useXxxxxStore	
import { useCountStore } from '@/store/modules/count'
import { storeToRefs } from 'pinia'

// 调用useXxxxxStore得到对应的store
const countStore = useCountStore()

const { count } = storeToRefs(countStore)

const changeCount = () => {
    // countStore.count++
    // countStore.$patch({
    //     count: 999
    // })
    // countStore.increment(10)
    count.value++
}

const { doubleCount, tripleCount } = storeToRefs(countStore);

countStore.$subscribe((mutation, state) => {
  console.log(mutation, state)

  // 每当它发生变化时，将整个状态持久化到本地存储
  localStorage.setItem('count', JSON.stringify(state))
})
</script>