<template>
	<div class="overview">
		<section class="header">
			<h2 class="header__title">
				ALL EVENTS
			</h2>
		</section>

		<div v-if="loading"> Loading all events...</div>
		<div v-else>
			<section class="overview__allEvents">
				<ul v-for="event, index in result" class="event" :key="event._id">
					<router-link :to="{ name: 'home', params: { slug: event.slug.current } }">
						<img :src="result[index].eventImage.asset.url" alt="event" class="overview__event-image">
						<p class="overview__event-title"> {{result[index].eventTitle}} </p>
					</router-link>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
import query from '../groq/home.groq?raw';
import sanityMixins from '../mixins/viewMixin';

export default {
	
	mixins: [sanityMixins],

	async created() {
		await this.sanityFetch(query, {
			type: 'event'
		});
	},
}
</script>

<style>

.header {
	margin-top: 30px;
	padding: 20px;
	border-bottom: solid;
	border-top: solid;
	display: flex;
	justify-content: space-evenly;
	text-align: center;
}

.overview {
	background-color: white;
	border-style: solid;
	width: 90%;
	margin-left: 5%;
}

.overview__allEvents {
	padding: 1%;
	text-align: center;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1%;
	/* grid-template-rows: auto; */
}

/* 800px tablet and smaller -- mobile */
@media screen and (max-width: 800px) { 
	.overview {
		background-color: white;
		border-style: solid;
		width: 100%;
		margin: 0%;
		padding: 0%;
	}

	.overview__allEvents {
		grid-template-columns: repeat(2, 1fr);
	}
}

</style>