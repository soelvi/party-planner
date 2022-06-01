import event from './modules/event';
import todos from './modules/todos';

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
		event,
		todos
	}
};
