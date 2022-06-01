<template>
	<div class="invitation">
		<section class="header">
				<h2 class="header__title">
					{{ pageTitle }}
				</h2>
		</section>
		<router-link to="/">til /overview</router-link>

		<div v-if="loading">Loading invitation...</div>
		<div v-else class="invitation__event">
			
				<h2> {{ result.eventTitle }} </h2>

				<img :src="result.eventImage.asset.url" alt="" class="invitation__image">

				<h3> description: </h3> 
				<div> {{ result.description }} </div>

				<h3> date: </h3> 
				<div> {{ result.time }} </div>

				<h3> time: </h3> 
				<div> {{ result.time }} </div>

				<h3> location:  </h3> 
				<div> {{ result.location }} </div>

				<h3> dresscode:  </h3> 
				<div> {{ result.dresscode[0].dresscode }} </div>

				<h3> menu: </h3> 
				<div> {{ result.menu }} </div>
			
		
				<h3> RSVP </h3>
				<div> {{ count }} guest attending </div>

				<div>
					<button class="counter__button" @click="increase">
						<img src="/public/images/accept.png" alt="accept invitation">
					</button>
					<button class="counter__button" @click="greet">
						<img src="/public/images/decline.png" alt="decline invitation">
					</button>
				</div>

				<section class="invitation__location">
					<Location />
				</section>
		</div>
	</div>
</template>

<script>
import query from '../groq/projectPage.groq?raw';
import sanityMixins from '../mixins/viewMixin';
import Location from '../components/Location.vue';

export default {
	
	mixins: [sanityMixins],

	components: {
		Location
	},

	data() {
		return {
			pageTitle: 'DIGITAL INVITATION',
			count: 0,
			message: 'Thats too bad! Maybe next time.'
		};
	},

	async created() {
		await this.sanityFetch(query, {
			slug: this.$route.params.slug
		});
	},

	props: {
		slug: {
			type: String
		}
	},

	methods: {
		// accept button should optimally only be clicked once/increase with only one, for the sake of prototype possible to click multiple times
		increase() {
			this.count += 1;
		},

		// decline button will show a message and do nothing with guest number
		greet(event) {
			// `this` inside methods points to the current active instance
			alert(`${this.message}`)
			// `event` is the native DOM event
			// if (event) {
			// 	alert(event.target.tagName)
			// }
		}
	},
}
</script>

<style>

h2, h3 {
padding-top: 2%;
}

.header {
	margin-top: 30px;
	padding: 20px;
	border-bottom: solid;
	border-top: solid;
	display: flex;
	justify-content: space-evenly;
	text-align: center;
}

.invitation {
	background-color: white;
	border-style: solid;
	width: 90%;
	margin-left: 5%;
}

.invitation__event {
	padding: 0 10% 0 10%;;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.invitation__image {
	height: 350px;
	object-fit: contain;
	
}

.invitation__location {
	width: 70%;
}

/* 800px tablet and smaller -- mobile */
@media screen and (max-width: 800px) { 
	.invitation {
		background-color: white;
		border-style: solid;
		width: 100%;
		margin: 0%;
		padding: 0%;
	}

	.overview__allEvents {
		grid-template-columns: repeat(2, 1fr);
	}

	.invitation__location {
	width: 70%;
	}
}
</style>