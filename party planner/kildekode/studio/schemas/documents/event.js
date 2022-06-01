export default {
	title: 'Event',
	name: 'event',
	type: 'document',
	fields: [
		{
			title: 'Title or name of event',
			name: 'eventTitle',
			type: 'string'
		},

		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
					source: 'eventTitle',
					maxLength: 200,
			},
		},

		{
			title: 'Event image',
			name: 'eventImage',
			type: 'image',
		},

		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},

		{
			title: 'Time',
			name: 'time',
			type: 'datetime',
			// validation: Rule => Rule.required().min(new Date())
		},

		{
			title: 'Location',
			name: 'location',
			type: 'string',
		},

		{
			title: 'Guestlist',
			name: 'guestlist',
			type: 'text',
		},

		{
			title: 'Menu',
			name: 'menu',
			type: 'string',
		},

		// {
		// 	title: 'Dresscode',
		// 	name: 'dresscode',
		// 	type: 'string',
		// },
		
		{
			title: 'Dresscode',
			name: 'dresscode',
			type: 'array',
         	of: [{
               type: 'reference',
               to: [{ type: 'dresscode'}]
            }],
		},
	]
}