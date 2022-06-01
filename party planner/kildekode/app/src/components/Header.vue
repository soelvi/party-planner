<template>
	<div v-if="loading">...</div>
	
	<section v-else class="header">	
			<h2 class="header__title">
				{{ title }} 
			</h2>	

			<ul class="header__countdown">
				<Countdown />
			</ul>
	</section>
	<router-link to="/"> back to /overview </router-link>
</template>

<script>
import query from '../groq/projectPage.groq?raw';
import sanityMixins from '../mixins/viewMixin';
import Countdown from '../components/Countdown.vue';

export default {
	
	mixins: [sanityMixins],

	components: {
		Countdown
	},

	async created() {
		await this.sanityFetch(query, {
			slug: this.$route.params.slug
		});
	},

	data() {
		return {
			title: 'PARTY PLANNER'
		};
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
li {
	list-style: none;
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


/* må ha null mellomrom mellom title og curly? why */
.header__title{
	font-size: var(--font-size-big);
	text-align: center;	
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.header__title-mega {
	font-size: var(--font-size-mega);
}

/* 600px -- mobile */
@media screen and (max-width: 600px) {
	.header__title{
	font-size: var(--font-size-small);
	text-align: center;	
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.header__title-mega {
	font-size: var(--font-size-medium);
}

}

</style>

