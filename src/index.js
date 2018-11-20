import Router from 'vue-router'
import Vuex from 'vuex'

class Ving {
  initStore(store, stores) {
    return new Vuex.store({
      ...store,
      modules: stores
    })
  }
  initRouter(router, routes) {
    return new Router({
      routes
    })
  }
  useFilters() {}
  useDirectives() {}
  usePlugins() {}
}

export default new Ving()