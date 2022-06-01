import event from './modules/event';

export default {
	state() {
		return {
			allEvents: [],
		};
	},

	getters: {
		getEvents(state) {
			return state.events;
		}
	},

	modules: {
		event
	}
};
