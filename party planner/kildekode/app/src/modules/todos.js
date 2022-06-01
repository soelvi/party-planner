export default {
	state() {
		return { 
			localStoreName: 'todo-state',
			todos: [
				{ 
				id: '', 
				name: '', 
				completed: false, 
				location: 'home'
				}
			],
		};
	},

	getters: {
		todos(state) {
			return state.todos;
		}
	},

	mutations: {
   	updateTodo(state, todoItem) {
         const id = todoItem.id;
			const completed = todoItem.completed;
			const name = todoItem.name;

			const findItem = state.todos.find((x) => x.id == id);
			if (findItem !== null) {
				if(completed !== undefined) {
					findItem.completed = completed;
				}
				if(name !== undefined) {
					findItem.name = name;
				}
			}
			else {
				console.log(`To do list item ${id} couldn't be found`);
			}
      },

		addTodo(state, todoItem) {
			if(todoItem.id !== undefined && typeof todoItem.name == 'string' && typeof todoItem.completed == 'boolean') {
				state.todos.push({
					id: todoItem.id,
					name: todoItem.name,
					completed: todoItem.completed,
					location: 'home'
				})
			}
		},

		deleteTodo(state, todoItem) {
			const id = todoItem.id;
			const removeItem = state.todos.findIndex((x) => x.id == id);
			
			if(removeItem !== null) {
				state.todos.splice(removeItem, 1);
			}
		},

		moveTodoItem(state, todoItem) {
			const id = todoItem.id;
			const location = todoItem.location;
			const findItem = state.todos.find((x) => x.id == id);

			if(findItem !== null) {
				findItem.location = location;
			}

			else {
				console.log(`To do list item ${id} couldn't be found`)
			}
		},
		
		randomId() {
      	return Math.random().toString(36).slice(2);   /* generates random ids, source: Alejandro */
      },
    },
	
	actions: {
		setToLocalStorage({ state }) {
			window.localStorage.setItem(state.localStoreName, JSON.stringify(state.todo.item));
		},
		
	// 	getFromLocalStorage({ state, commit }) {
	// 		/* 
	// 			- Cart.vue kaller denne metoden via mounted();
	// 			- localStorage.getItem returnerer state.shop.cart i form av String, f.eks.
 	// 			  { 'cart-state': '[{"id":"005","name":"Pear","price":90},{"id":"002","name":"Apple","price":10}]' } 
	// 		*/
			
	// 		const localCartState = window.localStorage.getItem(state.localStoreName);
	// 		const localCartStateObject = JSON.parse(localCartState);

	// 		commit('setItems', localCartStateObject);
	// 	},

	// 	removeFromLocalStorage({ state }) {
	// 		window.localStorage.removeItem(state.localStoreName)
	// 	},

	// 	clearLocalStorage() {
	// 		window.localStorage.clear();
	// 	}
	// }
}
}