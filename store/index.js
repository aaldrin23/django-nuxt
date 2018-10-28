import Vuex from 'vuex';

const store = () => {
	return new Vuex.Store({
		state: () => ({
			user: null,
			authToken: null
		}),
		mutations: {
			setToken(state, token) {
				state.authToken = token;
			}
		},
		actions: {
			nuxtServerInit({ store }, { app }) {
				const token = app.$cookies.get('token');
				if (token) {
					store.commit('setToken', token);
					console.log(token);
				}
			}
		}
	});
};

export default store;
