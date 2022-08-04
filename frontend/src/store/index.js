import { createStore } from 'vuex'
import headerStore from './header'

const store = createStore({
  modules: {
    header: headerStore,
  }
})

export default store
