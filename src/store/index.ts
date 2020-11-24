import Vue from 'vue';
import Vuex from 'vuex';
import image from './modules/image';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    image
  }
}) 

export default store