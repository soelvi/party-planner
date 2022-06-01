<template>
	<main class="dashboard">
		<Header />
		
		<div class="dashboard__title">
			<Title />
		</div>
	

		<div class="dashboard__components"> 
			<DateTime />
			<SendInvitation />
			<Location />
			<ToDo />
			<Guestlist />
			<Menu />
		</div>
	</main>
</template>

<script>
	import query from '../groq/home.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	import Header from '../components/Header.vue';
	import DateTime from '../components/DateTime.vue';
	import Location from '../components/Location.vue';
	import SendInvitation from '../components/SendInvitation.vue';
	import ToDo from '../components/ToDo.vue';
	import Guestlist from '../components/Guestlist.vue';
	import Menu from '../components/Menu.vue';
	import Title from '../components/Title.vue';
	

	export default {
		mixins: [viewMixin],
		
		components: {
			Header,
			DateTime,
			Location,
			SendInvitation,
			ToDo,
			Guestlist,
			Menu,
			Title
		},
		
		async created() {
			await this.sanityFetch(query, { 
				documentType: 'project' 
			});

			// this.metaTags({
			// 	title: 'Hello from Home.vue',
			// })
		}
	}
</script>

<style>

.dashboard {
	background-color: white;
	border-style: solid;
	/* border-right-style: solid;
	border-left-style: solid; */
	width: 90%;
	margin-left: 5%;
}

.dashboard__title {
	display: grid;
	grid-template-columns: 1fr;
	justify-content: space-evenly;
}

.dashboard__components {
	padding-left: 3%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-evenly;

	/* grid-template-columns: masonry; */
}


/* 800px tablet and smaller -- mobile */
@media screen and (max-width: 800px) { 
	.dashboard {
		background-color: white;
		border-style: solid;
		width: 100%;
		margin: 0%;
		padding: 0%;
	}
	
	.dashboard__components {
		padding-left: 5%;
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
	}
	
}

</style>