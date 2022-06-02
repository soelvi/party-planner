<template>
	<div v-if="loading">...</div>
	<section v-else class="title">	
			<div class="title__event">
				<p>current event:  <br><b> {{ result.eventTitle }} </b> </p>
			</div>
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
.title {
	text-align: center;
}

.title__event {
	font-size: var(--font-size-medium);
}

/* 600px -- mobile */
@media screen and (max-width: 600px) {
	.title__event {
		font-size: var(--font-size-small);
	}
}
</style>