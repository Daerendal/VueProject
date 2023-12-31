import Vuex from 'vuex';

export default new Vuex.Use({
  state() {
    return {
      count: 0,
      options: [
        'Opcja 1', 'Opcja 2', 'Opcja 3', 'Opcja 4', 'Opcja 5',
        'Opcja 6', 'Opcja 7', 'Opcja 8', 'Opcja 9', 'Opcja 10',
        'Opcja 11', 'Opcja 12', 'Opcja 13', 'Opcja 14', 'Opcja 15',
      ],
      selectedOption: null,
    };
  },
  mutations: {
    SET_SELECTED_OPTION(state, option) {
      state.selectedOption = option;
    },
  },
  actions: {
    selectOption({ commit }, option) {
      commit('SET_SELECTED_OPTION', option);
    },
    async fetchOptions({ state }) {
      // Simulate an API call or update options as needed
      // In a real application, you would make an HTTP request here
      return new Promise((resolve) => {
        setTimeout(() => {
          state.options = [
            'New Opcja 1', 'New Opcja 2', 'New Opcja 3', 'New Opcja 4', 'New Opcja 5',
            'New Opcja 6', 'New Opcja 7', 'New Opcja 8', 'New Opcja 9', 'New Opcja 10',
            'New Opcja 11', 'New Opcja 12', 'New Opcja 13', 'New Opcja 14', 'New Opcja 15',
          ];
          resolve();
        }, 1000);
      });
    },
  },
  getters: {
    getSelectedOption(state) {
      return state.selectedOption;
    },
  },
});