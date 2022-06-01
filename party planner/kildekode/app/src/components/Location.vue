<template>
	<section class="location">
		<div class="flip-container">
			<div class="flipper">
				<img src="/images/location.webp" alt="location" class="front">
				<div v-if="loading">...</div>
				<div v-else class="back">{{ result.location }}</div>
			</div>
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
.location {
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
.flip-container:hover .flipper, .flip-container.hover .flipper {
	transform: rotateY(180deg);
}

.flip-container, .front, .back {
	width: 100%;
	height: 500px;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
}

/* hide back of card during swap */
.front, .back {
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
.front {
	z-index: 2;
	transform: rotateY(0deg);
}

/* back, initially hidden card */
.back {
	transform: rotateY(180deg);
}

/* 600px -- mobile */
@media screen and (max-width: 600px) {

	.flip-container, .front, .back {
		width: 100%;
		height: 300px;
	}

	.front, .back {
	font-size: var(--font-size-small);
	}
}
</style>
