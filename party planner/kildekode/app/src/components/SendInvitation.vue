<template>
	<section class="sendInvitation">
		<div v-if="loading">...</div>
		<div v-else>
				<router-link :to="{ name: 'invitations', params: { slug: result.slug.current } }">
					<button class="invitations__button"> Send invitations </button>
				</router-link>
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

.sendInvitation {
	margin: 2%; 
	padding: 1%;
	/* background-color: orange; */
	width: var(--width-component);
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	text-align: center;
}

.invitations__button {
	font-size: var(--font-size-medium);
}

/* 600px -- mobile */
@media screen and (max-width: 600px) {
	.invitations__button {
		font-size: var(--font-size-small);
	}
}
</style>