import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';

class Ving {
  constructor (options) {
    Object.assign(this, options);

    this.router = null;
    this.store = null;

    this.init();
  }

  init () {
    const router = this.initRouter();
    const store = this.initStore();
    return new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }

  initStore(store, stores) {
    const store = new Vuex.store({
      ...store,
      modules: stores
    });
    this.store = store;
  }

  initRouter({ base, routes }) {
    const router = new Router({
      base,
      routes
    });
    this.router = router
  }

  useFilters() {}
  useDirectives() {}
  usePlugins() {}
}

export default Ving