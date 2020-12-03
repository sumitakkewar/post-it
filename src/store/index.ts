import { createStore } from 'vuex'

function isJSON(string: string) {
  try {
      JSON.parse(string)
      return true;
  } catch (err) {
      return false;
  }
}

export default createStore({
  state: {
    items: new Array<any>(),
  },
  mutations: {
    addItem(state, value){
      state.items.push(value)
    },
    updateItems(state, value){
      state.items = value
    }
  },
  actions: {
    addNewItem({ commit, dispatch }, value) {
      commit("addItem", value);
      dispatch("saveItems");
    },
    updateItems({ commit, dispatch }, value) {
      commit("updateItems", value);
      dispatch("saveItems");
    },
    saveItems({ state }) {
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    getItems({ commit }) {
      const items = window.localStorage.getItem("items");
      if (items) commit("updateItems", isJSON(items)
          ? JSON.parse(items)
          : items
      );
  },
  },
  getters:{
    items: state => {
        return state.items;
    },
  },
  modules: {

  }
})
