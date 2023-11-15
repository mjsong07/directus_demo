import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	name: string;
	desc: string;
};

export default defineOperationApi<Options>({
	id: 'custom',
	handler: ({ name,desc }) => {
		console.log(name,desc);
		return {
			name:name,
			desc:desc, 
		}
	},
});
