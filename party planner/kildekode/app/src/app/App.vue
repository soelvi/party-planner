<template>
	<RouterView :key="$route.fullPath" /> 
	<!-- fullpath forces to route to path -->
</template>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
