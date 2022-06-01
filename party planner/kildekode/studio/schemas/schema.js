import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

/* documents */
import event from './documents/event.js'

/* types */
import dresscode from './documents/dresscode.js'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		event,
		dresscode,	
	]),
})
