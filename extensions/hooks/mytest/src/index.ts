import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter, action }) => {
	filter('items.create', (args) => {
		console.log('Creating Item!',args);
	});

	action('items.create', (args) => {
		console.log('Item created!',args);
	});
});
