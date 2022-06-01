import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'jb1dj01u',
	dataset: 'planner',
	apiVersion: '2022-05-11', //dagen prosjektet ble først opprettet/sist oppdatert
	useCdn: false //false for localhost, true for netlify
});