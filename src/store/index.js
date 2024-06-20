import { createPinia } from 'pinia'


import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()

// 全局配置所有store持久化
store.use(createPersistedState({
    auto: true,
}))
export default store