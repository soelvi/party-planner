export default {
	state() {
		return { 
			event: null,
			time: null
		};
	},

	getters: {
		getEvent(state) {
			return state.event;
		},

		getDateTime(state) {
			return state.time;
		}
	},

	mutations: {
      setEvent(state, event) {
         state.event = event;
      },

		setDateTime(state, time) {
         state.time = time;
      },
    },
}