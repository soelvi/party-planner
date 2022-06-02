<template>
	<section class="guestlist">
		<h3 class="guestlist__title"> Guestlist </h3>
		
		<div v-if="loading">...</div>
		<ul v-else>
			<li class="guestlist__column"> {{ result.guestlist }} </li>
		</ul>
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
}
</script>

<style>
.guestlist {
	margin: 2%; 
	padding: 1%;
	width: var(--width-component);
	height: 500px; 
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	overflow: scroll;
}

.guestlist__title {
	text-align: center;
}

.guestlist__column {
	padding-top: 2%;
	padding-left: 2%;
	width: 100%;
	/* display: grid;
	grid-template-columns: 1fr 1fr; */
}

</style>