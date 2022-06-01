<template>
	<section class="countdown">
		<ul class="header__countdown">
				<li> TIME UNTIL PARTY </li>
				<li class="header__title-mega"> 00:00:00:00 </li>
				<li> DAYS / HOURS / MINS / SECS </li>
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

	methods: {
		
	}
}
</script>

<style>

</style>
