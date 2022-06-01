<template>
	<!-- <Header/> -->
	<!-- fullPath forces to go to page -->
	<RouterView :key="$route.fullPath" /> 
	<!-- <router-view :key="$route.fullPath"> </router-view> -->
</template>

<script>
	// import Header from '../components/Header.vue';
	
	// export default {
	// 	components: { Header }
	// }
</script>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
