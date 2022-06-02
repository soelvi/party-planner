<template>
	<section class="menu">
		<div class="menu__flip-container">
			<div class="menu__flipper">
				<h3 class="menu__front">MENU</h3>
					<img :src="image" class="menu__back">
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			image: {},
			error: '',
		}
	},

	created() {
			this.fetchData();
	},

	methods: {
		async fetchData() {
			const url = `https://foodish-api.herokuapp.com/api/`; 
			const response = await fetch(url);
			try {
				await this.handleResponse(response);
			} catch (error) {
				this.error = error.message;
			}
		},

		async handleResponse(response) {
			if (response.status >= 200 && response.status < 300) {
				const results = await response.json();
				this.image = results.image;
				// console.log(results)
			}
		},
	}
}
</script>

<style>
.menu {
	margin: 2%; 
	background-color: #d6d6d6;
	width: var(--width-component);
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	text-align: center;
}
 
img {
	object-fit: cover;
}

/* flip the card when hovered */
.menu__flip-container:hover .menu__flipper, .menu__flip-container.hover .menu__flipper {
	transform: rotateY(180deg);
}

.menu__flip-container, .menu__front, .menu__back {
	width: 100%;
	height: 500px;
}

/* flip speed goes here */
.menu__flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
}

/* hide back of card during swap */
.menu__front, .menu__back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
	font-size: var(--font-size-medium);
	display: flex;
	flex-direction: column;
	justify-content: center;
}

/* front card, placed above back */
.menu__front {
	z-index: 2;
	transform: rotateY(0deg);
}

/* back, initially hidden card */
.menu__back {
	transform: rotateY(180deg);
}
</style>