<template>
	<section class="toDo">
		<h3 class="toDo__title">To-do list</h3>

		<div class="toDo__tasks">
			<div v-if="!isEditing" >
				<input type="text" v-model="todo" class="toDo__border" placeholder="Write here..">
				<input type="submit" value="add" @click="storeTodo"> 
			</div>	

			<div v-else class="toDo__input">
				<input type="text" v-model="todo" class="toDo__border" placeholder="Update text..">
				<input type="submit" value="update" @click="updateTodo">
			</div>
			
			<ol>
				<li v-for="(todo, index) in todos" class="toDo__input">
					<span>
						<input type="checkbox" v-if="!isChecked" @click="isChecked"  class="finished__toDo">
						<label> {{ todo }} </label>
					</span>
					<!-- <img src="/public/images/edit.png" alt="edit button"> -->
					<span>
						<button @click="editTodo(index, todo)" class="toDo__buttonImage"> <img src="/public/images/edit.png" alt="edit button"> </button> 
						<button @click="deleteTodo(index)" class="toDo__buttonImage"> <img src="/public/images/delete.png" alt="delete button"> </button>
					</span>
				</li>
			</ol>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isChecked: false,
			isEditing: false,
			selectedIndex: null,
			todo: '', // Empty array for new to-do task
			todos: [], // Used for adding new todo list items
		}
	},

	methods: {
		storeTodo() {
			this.todos.push(this.todo)
			this.todo = ''
		},

		editTodo(index, todo) {
			this.todo = todo 
			this.selectedIndex = index
			this.isEditing = true
		},

		updateTodo() {
			this.todos.splice(this.selectedIndex, 1, this.todo)
			this.isEditing = false
			this.todo = ''
		},

		deleteTodo(index) {
			this.todos.splice(index, 1)
		},

		finishedTodo() {
			this.isChecked = true
		}
	}
}
</script>

<style>
.toDo {
	margin: 2%; 
	padding: 1%;
	width: var(--width-component);
	height: 500px; 
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	overflow: scroll;
}

.toDo__title {
	text-align: center;
}

.toDo__tasks {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.toDo__input {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
	padding: 1%;
	margin: 2%;
}

.toDo__buttonImage{
	width: 20px;
	height: 20px;
}

.toDo__border {
	width: 80%;
	border-style: solid;
	padding: 1%;
	margin: 2%;
}

.finished__toDo {
	padding-right: 5px;
	text-decoration: line-through;
}

.padding {
	padding: var(--padding-small);
}


</style>