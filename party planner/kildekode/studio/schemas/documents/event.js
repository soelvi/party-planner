export default {
	title: 'Event',
	name: 'event',
	type: 'document',
	fields: [
		{
			title: 'Title or name of event',
			name: 'eventTitle',
			type: 'string',
			validation: Rule => [ 
				Rule.required().min(3).error('The title needs atleast 3 character'),
				Rule.max(50).warning('Shorter titles are usually better')
			]
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
			validation: Rule => [ 
				Rule.required().error('Please enter an image for event'),
				Rule.warning('Event should have cover image')
			]
		},

		{
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: Rule => [
				Rule.required().min(10).error('A description of min. 10 characters is required')
			]
		},

		{
			title: 'Time',
			name: 'time',
			type: 'string',
			validation: Rule => [ 
				Rule.required().error('Fill in time of event'),
				Rule.warning('Please enter a time of the event')
			]
		},

		{
			title: 'Date',
			name: 'date',
			type: 'string',
			validation: Rule => [ 
				Rule.required().error('Please enter a date for the event'),
				Rule.warning('Please enter a date of the event')
			]
		},

		{
			title: 'Location',
			name: 'location',
			type: 'string',
			validation: Rule => [
				Rule.required().min(10).error('Address of min. 10 characters is required'),
				Rule.max(50).warning('Shorter addresses are usually better')
			]
		},

		{
			title: 'Guestlist',
			name: 'guestlist',
			type: 'text',
			validation: Rule => Rule.warning('Fill in guests of the event to keep track of who is coming!')
		},

		{
			title: 'Menu',
			name: 'menu',
			type: 'string',
			validation: Rule => [
				Rule.required().min(10).error('Please fill in the menu/food/drinks of the event')
			]
		},
		
		{
			title: 'Dresscode',
			name: 'dresscode',
			type: 'array',
         	of: [{
               type: 'reference',
               to: [{ type: 'dresscode'}]
            }],
			validation: Rule => Rule.warning('Guests will appreciate to know the dresscode')
		},
	]
}