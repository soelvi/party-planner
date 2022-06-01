import Home from './views/Home.vue';
import Invitations from './views/Invitations.vue';
import Overview from './views/Overview.vue';

export default [
	{ 
		name: 'overview', 
		path: '/',
		component: Overview
	},
	{ 
		name: 'invitations', 
		path: '/:slug/invitations/',  //dynamic routes start with: and fetches the chosen event 
		component: Invitations
	},
	{ 
		name: 'home', 
		path: '/:slug', 
		component: Home 
	},
]