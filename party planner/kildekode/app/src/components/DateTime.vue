<template>
	<section class="datetime">
		<h3> Date / Time </h3>

		<div v-if="loading">...</div>
		<div v-else>{{ result.time }}</div>
		
	</section>
</template>

<script>
import query from '../groq/projectPage.groq?raw';
import sanityMixins from '../mixins/viewMixin';

export default {
	
	mixins: [sanityMixins],

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

	computed: {
		// apiDateTime() {
		// 	return this.$store.getters.getDateTime;
		// }
	},

	methods: {
		formatDate(time){
			const timeString = new Date(time).getTime();
			console.log(timeString)
		}
	},
	
}
</script>

<style>
.datetime {
	margin: 2%; 
	padding: 1%;
	/* background-color: orange; */
	width: var(--width-component);
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	text-align: center;
}

.datetime_text {
	background-color: orangered;
}

</style>
